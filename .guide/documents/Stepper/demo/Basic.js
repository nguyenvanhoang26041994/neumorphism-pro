import React from 'react';
import { Stepper, ButtonGroup, Button } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const {
    getStatus,
    activeStep,
    handleReset,
    handleNext,
    handleCancel,
    handleFinish,
  } = Stepper.useSteps({
    maxStepIdx: 3,
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" activeStep={activeStep} getStatus={getStatus}>
        <Stepper.Step title="Step One">
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step title="Step Three">
          Description Three
        </Stepper.Step>
        <Stepper.Step title="Step Four">
          Description Four
        </Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleFinish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};

export default Demo;
