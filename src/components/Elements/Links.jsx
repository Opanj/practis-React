import { Link } from "react-router-dom";

import React from "react";

export const Links = () => {
  return (
    <div className="mt-5 text-center text-sm">
      Don't have an account?{" "}
      <Link to="/register" className="text-blue-600 font-bold">
        sign up
      </Link>
    </div>
  );
};
