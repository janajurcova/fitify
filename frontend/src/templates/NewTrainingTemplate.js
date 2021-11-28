import React from 'react';
import { MainSectionDashboard, Heading } from 'src/atoms/';
import { TopNavigation, NewWorkoutForm } from 'src/organisms/';
import List from 'src/organisms/ListExercises';
import ListAllWorkoutItems from 'src/organisms/ListAllWorkoutItems';
export function NewTrainingTemplate({ workoutItems, dispatch }) {
  return (
    <>
      <TopNavigation />
      <MainSectionDashboard>
        <Heading size={'lg'}>New Training</Heading>

        <main className="flex grid-container-left br2 ml3 pa2 ">
          <a
            className="f3 tc link dim br-pill ph4 pv3 mt4 dib green bg-dark"
            href="#0"
          >
            <div>Add new training</div>
          </a>
          <div className="right-offset"></div>
          <div>
            <h2></h2>
          </div>
        </main>

        <div className=" flex grid-container-left ml3 mt mb5 flb w-50-l w-50 br2 pa2 ">
          <div className="mb6    left bg-dark">
            <NewWorkoutForm />

            <List workoutItems={workoutItems} dispatch={dispatch} />

            <ListAllWorkoutItems
              workoutItems={workoutItems}
              dispatch={dispatch}
            />
          </div>
        </div>
      </MainSectionDashboard>
    </>
  );
}
