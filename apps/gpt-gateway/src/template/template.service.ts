import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemplateServiceBase } from "./base/template.service.base";
import {
  OpenaiService,
  ChatCompletionRequestMessageRoleEnum,
  CreateChatCompletionRequestSettings,
} from "../providers/openai/openai.service";
import { TemplateFindUniqueArgs } from "./base/TemplateFindUniqueArgs";
import { TemplateTestInput } from "./dto/TemplateTestInput";
import { MessageParam } from "./dto/MessageParam";

@Injectable()
export class TemplateService extends TemplateServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    private openaiService: OpenaiService
  ) {
    super(prisma);
  }

  //replace all params in message based on placeholder in the form of {{param}}
  //e.g. {{name}} will be replaced with params.name
  prepareMessage(message: string, params: MessageParam[]): string {
    const paramsObj = params.reduce((acc, param) => {
      acc[param.name] = param.value;
      return acc;
    }, {} as Record<string, string>);

    let output = message;
    for (let key in paramsObj) {
      let placeholder = `{{${key}}}`;
      let value = paramsObj[key];
      while (output.includes(placeholder)) {
        output = output.replace(placeholder, value);
      }
    }
    return output;
  }

  async testTemplate(args: TemplateTestInput): Promise<string | null> {
    const template = await this.prisma.template.findUnique({
      where: {
        id: args.templateId,
      },
      include: {
        model: true,
        messages: {
          orderBy: {
            position: "asc",
          },
        },
      },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    const messages = template.messages.map((message) => ({
      role: message.role.toLowerCase() as ChatCompletionRequestMessageRoleEnum,
      content: this.prepareMessage(message.content, args.params),
    }));

    return this.openaiService.createChatCompletion(
      template.model.name,
      messages,
      template.params as CreateChatCompletionRequestSettings
    );
  }
}
