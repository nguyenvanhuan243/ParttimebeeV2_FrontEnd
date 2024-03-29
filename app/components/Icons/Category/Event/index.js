/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';

export default class EventIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        xmlSpace="preserve"
      >
        <image
          width={24}
          height={24}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAE
          DElEQVRIx7WWTWhcVRTHf/e9efM9bzLTmXaSQBktNWk0WtLS2jRVIqGFCkUQF4KKuBFduVMEBcWF
          guCyG0UoFRQVItraQr+1pa1JU5K2adokJV/NpJmZN8l8v6/rQhBCJ00X7Vnee/n/7v8c7jlXSCm9
          hmF8LqV8C2jm0cS8EOJQLBb7VOTz+S+llB8+IuEVIYT4SuRyubuP8Ob3OVEeozhAs2etEw4u/sxJ
          tNIwlr4doSloC5exg51UN/ahoDw4TblcTjbasKZvs3T8N6Ipgw3NZyHhQMEFP6CqcBvuVfdiGCGi
          vS/j3dTRENDQgeVC4dQRqv3fEt8bgh4/NHmgRQIO2BIsUPt/x7pYZtmqob/bgbeBmfuXpIX/2mES
          xaMoaY3xKRMpw9DUDZH9uMFeiLQjEUxlLbybfSTqpwhd/+k/+FoA9e5ZohPfEN+ep+N1HxWfw8Vf
          NWTmWYqlLorVPchSNwN/+6g3OWx+VSO+s0Tk1tcomUtrp6i2cAOZdHATHoKxNO3BZupDQ4gTBynK
          TVREiKh/lNaghffAbuqtGSq5OcyCjT03TDDV/SCAS8CawI0JymoQo9qJawo2r7dZmjHR+xYI2yrG
          iQItKY3ZSpxCuQmfukhTq4tSG6cuJQjRGKAtniaiD0BbgGhkK8XKDkYmh4i4TSidftB34Vhgd57H
          qVQZNzw8t2MrsfA9WB6DGxeQuXOYiRcbA5TMANgmmBpC1dH9UTqMUexknfALe9B87yClQKZV8meO
          0T43QdTfAx4dLAGOhWdxeAVgRZHNDb1UZ70wY1O7Ocb1H74nUr6OM2Awc2wSvCZKwGXm/B3MS4sk
          vWOM/nyI8sgkTNtUZ31UEw+ogTGvcO07A38K8nKYWjBKc4+OL7BMvHWBzOVPsEsK8dYsMqhQLAe5
          cnWM4T9LxFwVJytpa6kRT64CkIUF1JqCW7bZ1quhd29hZqmNqaUJkmfv8pQyiOMKrpVjGHon6fRG
          +raNURm4ydQ5B9NSkIvTwO7/NVe0Cgnkzx2lfuEjQtsEbkuCgttFONFFaHqCwEg/SkRhOdVH+ck2
          ysYgujuEJ7NMadDBv+sLki+9svpDE8C6nXuwI+splSXz8xk0e5BUeBR9S4S/slGO3/AT71rPE4lb
          hMVV5uZyLBkOVijFut29D9EqfBES+z6mtJymcMvGX81iGiex8/0ERBafbeDk+qksniZYWcKccqhY
          T7PhwGcovuh9cqt2U9csUrpyGGf2IN6EQLXgzI9ValXY90YAUwOZlyjNbxLe9T6KFmokw6rzQPFG
          0J9/j/JIjOrYHxQNyE7+g23bzN55hlDcRmvZTrLnA1C01WR4uJHpmEhUZo/8gl0ukn7tbYSwQA2w
          Rsw//qH/uL8t/wLogt6qCWRaNAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0wNlQyMzo1MToz
          Mi0wNzowMD6OP+AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMDZUMjM6NTE6MzItMDc6MDBP
          04dcAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}

