import React, { useState } from 'react';

export default function ImageSearch({ searchHook }) {
  const [text, setText] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    searchHook(text);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container d-flex justify-content-center p-3">
          <div className="row align-items-center">
            <div className="col-auto">
              <label className="col-form-label">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Image"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
