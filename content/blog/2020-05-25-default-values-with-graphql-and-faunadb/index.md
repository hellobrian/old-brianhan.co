---
title: "Default Values with GraphQL + FaunaDB"
description: "Create records with default values using graphql"
date: "2020-05-25"
draft: false
docz: false
---

I started dipping my toes into learning GraphQL today using FaunaDB with this [guide here](https://docs.fauna.com/fauna/current/start/graphql).

After logging in, and creating a database, I wrote a simple schema for a tiny workout app I'm building.

```rust
type Workout {
  pushups: Int
  squats: Int
  created: Date!
}

type Query {
  allWorkouts: [Workout!]
}
```

Basically, I want to build an app where I can input the number of pushups and squats I do in a day.

What's cool about FaunaDB is that you can start with a basic schema and upload it to FaunaDB to generate a GraphQL API with all the basic CRUD actions.

Here's a subset of the schema it generated for me based on my simple schema focusing on the `WorkoutInput`.

```rust{2-2,10-14}
type Mutation {
  createWorkout(data: WorkoutInput!): Workout!
  updateWorkout(
    id: ID!
    data: WorkoutInput!
  ): Workout
  deleteWorkout(id: ID!): Workout
}

input WorkoutInput {
  pushups: Int
  squats: Int
  created: Date!
}
```

Without the default values, running a `createWorkout` mutation would result in the values for `pushups` and `squats` to be `null`. Instead, I want them to default to `0` whenever a new workout is created.

This `WorkoutInput` is where can declare some default values!

Here's how we can do that:

Copy and paste `WorkoutInput` into your own schema and add default values in the input.

```rust{12-13}
type Workout {
  pushups: Int
  squats: Int
  created: Date!
}

type Query {
  allWorkouts: [Workout!]
}

input WorkoutInput {
  pushups: Int = 0
  squats: Int = 0
  created: Date!
}
```

Finally, update your schema in FaunaDB and write a createWorkout mutation. Now `pushups` and `squats` should default to `0`.

```rust
mutation {
  createWorkout(data:{created: "2020-05-15"}) {
    pushups
    squats
  }
}
```

```json
{
  "data": {
    "createWorkout": {
      "pushups": 0,
      "squats": 0
    }
  }
}
```
