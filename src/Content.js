import React from "react";

const Content = (props) => {
  const Part1 = (props) => {
    return (
      <p>
        {props.part1} {props.exercises1}
      </p>
    );
  };
  const Part2 = (props) => {
    return (
      <div>
        <p>
          {props.part2} {props.exercises2}
        </p>
      </div>
    );
  };
  const Part3 = (props) => {
    return (
      <div>
        <p>
          {props.part3} {props.exercises3}
        </p>
      </div>
    );
  };
  return (
    <div>
      <p>
        <Part1 part1={props.part1} exercises1={props.exercises1} />
      </p>
      <p>
        <Part2 part2={props.part2} exercises2={props.exercises2} />
      </p>
      <p>
        <Part3 part3={props.part3} exercises3={props.exercises3} />
      </p>
    </div>
  );
};

export default Content;
