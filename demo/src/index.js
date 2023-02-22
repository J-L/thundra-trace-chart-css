import React, { Component } from 'react';
import { render } from 'react-dom';
import { InvocationTraceChart } from './InvocationDisplay/InvocationTraceChart';
import './main.scss';
import { JobProcessTraceChart } from './ProcessDisplay/ProcessTraceChart';
import { WorkflowJobStepTraceChart } from './WorkflowJobStepDisplay/WorkflowJobStepTraceChart';

const DEMO_TYPE = {
  JOB_PROCESS: 'JobProcess',
  WORKFLOW_TIMELINE: 'WorkflowTimeline',
  INVOCATION: 'Invocation',
};

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDemo: DEMO_TYPE.JOB_PROCESS,
    };
  }

  renderButton = (activeDemo, buttonType, buttonTitle) => {
    return (
      <button
        className={activeDemo === buttonType ? 'selected' : ''}
        onClick={() =>
          this.setState({
            activeDemo: buttonType,
          })
        }
      >
        {buttonTitle}
      </button>
    );
  };

  render() {
    const { activeDemo } = this.state;

    let activeDemoJSX = '';
    if (activeDemo === DEMO_TYPE.JOB_PROCESS) {
      activeDemoJSX = <JobProcessTraceChart />;
    } else if (activeDemo === DEMO_TYPE.WORKFLOW_TIMELINE) {
      activeDemoJSX = <WorkflowJobStepTraceChart />;
    } else if (activeDemo === DEMO_TYPE.INVOCATION) {
      activeDemoJSX = <InvocationTraceChart />;
    }

    return (
      <div className="demo-wrapper">
        <div className="top-part">
          <h1>Thundra TraceChart Demos</h1>

          <div className="demo-selection">
            {this.renderButton(activeDemo, DEMO_TYPE.JOB_PROCESS, 'Job Process Display')}
            {this.renderButton(activeDemo, DEMO_TYPE.WORKFLOW_TIMELINE, 'Workflow Timeline')}
            {this.renderButton(activeDemo, DEMO_TYPE.INVOCATION, 'Invocation')}
          </div>
        </div>

        <div className="trace-chart-part">{activeDemoJSX}</div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
