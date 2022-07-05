import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'

import Category from './Category'
import CategorySchema from '../../model/CategorySchema'

@InputType()
class CategoryInput {
  @Field()
  name: string
  @Field()
  description: string
}

@Resolver()
class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    return await CategorySchema.find()
  }

  @Mutation(() => Category)
  async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    return await CategorySchema.create(categoryInput)
  }
}

export default CategoryResolver
