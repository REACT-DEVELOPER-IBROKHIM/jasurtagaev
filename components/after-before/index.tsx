import React from "react";

const AfterBefore = () => {
  return (
    <section className="w-full h-[500px] mb-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl mb-2">Before</h3>
            <p>Before content goes here...</p>
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl mb-2">After</h3>
            <p>After content goes here...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterBefore;
