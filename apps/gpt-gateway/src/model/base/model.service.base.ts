/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Model, Template } from "@prisma/client";

export class ModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelCountArgs>
  ): Promise<number> {
    return this.prisma.model.count(args);
  }

  async findMany<T extends Prisma.ModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelFindManyArgs>
  ): Promise<Model[]> {
    return this.prisma.model.findMany(args);
  }
  async findOne<T extends Prisma.ModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelFindUniqueArgs>
  ): Promise<Model | null> {
    return this.prisma.model.findUnique(args);
  }
  async create<T extends Prisma.ModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelCreateArgs>
  ): Promise<Model> {
    return this.prisma.model.create<T>(args);
  }
  async update<T extends Prisma.ModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelUpdateArgs>
  ): Promise<Model> {
    return this.prisma.model.update<T>(args);
  }
  async delete<T extends Prisma.ModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModelDeleteArgs>
  ): Promise<Model> {
    return this.prisma.model.delete(args);
  }

  async getTemplates(parentId: string): Promise<Template | null> {
    return this.prisma.model
      .findUnique({
        where: { id: parentId },
      })
      .templates();
  }
}
