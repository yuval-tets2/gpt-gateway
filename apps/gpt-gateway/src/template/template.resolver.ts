import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TemplateResolverBase } from "./base/template.resolver.base";
import { Template } from "./base/Template";
import { TemplateService } from "./template.service";
import { TemplateTestArgs } from "./dto/TemplateTestArgs";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Template)
export class TemplateResolver extends TemplateResolverBase {
  constructor(
    protected readonly service: TemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @graphql.Query(() => String, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "own",
  })
  async testTemplate(
    @graphql.Args() args: TemplateTestArgs
  ): Promise<string | null> {
    return this.service.testTemplate(args.data);
  }
}
