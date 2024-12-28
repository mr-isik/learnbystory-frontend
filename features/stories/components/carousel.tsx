"use client";

import React from "react";
import { Story } from "../types";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import moment from "moment";
import { Badge } from "@/components/ui/badge";

const stories: Story[] = [
  {
    _id: "1",
    title: "Story of a developer",
    content: "Content 1",
    field: "Field 1",
    result: "Result 1",
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Story of a designer",
    content: "Content 2",
    field: "Field 2",
    result: "Result 2",
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "Story of a manager",
    content: "Content 3",
    field: "Field 3",
    result: "Result 3",
    createdAt: new Date(),
  },
];

const StoryShowcase = () => {
  return (
    <Carousel
      opts={{
        align: "end",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {stories.map((story) => (
          <CarouselItem key={story._id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/stories/${story._id}`} className="block p-3">
              <Card className="h-full">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-2xl md:text-3xl text-center truncate max-w-full">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-md">
                    {moment(story.createdAt).format("MMM Do YY")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  {story.result && <Badge>{story.result}</Badge>}
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default StoryShowcase;