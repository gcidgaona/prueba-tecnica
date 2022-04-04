import React from 'react'
import SpinnerLoading from "../../ui/SpinnerLoading"

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <SpinnerLoading />
  };
}
export default WithLoading;