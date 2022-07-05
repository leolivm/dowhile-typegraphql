import { Arg, Field, Mutation, InputType, Query, Resolver } from 'type-graphql'

import Video from './Video'
import VideoSchema from '../../model/VideoSchema'

@InputType()
class VideoInput {
  @Field()
  description: string
  @Field()
  name: string
  @Field()
  category: string
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    return await VideoSchema.find()
  }

  @Mutation(() => Video)
  async createVideos(@Arg('videoInput') videoInput: VideoInput) {
    return await VideoSchema.create(videoInput)
  }
}

export default VideoResolver
