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

export default class FoodIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABy1BMVEX////u7u7t7e3t7e3o
          6Ojb29zh4eHs7O3s7Ozq6urS09Tp6enS0dK8vL7IyMnr6+zs6+zr6urq6enr6+vX19e/vsPl5ea/
          vsC2trm+vsDo6Ofz8/P7+/v29vb09fX5+vn09fTFwcXDw8jk5eW/wcXg4OD5+fnp6unb29va2trZ
          2dnX2Nfk5eT3+Pfr7Ou9uLvExcji4+O5t7m8t7+9u8Hw8PDl5eXq6+ry8vLW19bd3d339/e8uLvC
          wsTi4+Ti4eKfnaDGxcfm5ubu7+7Z2trs7ezw8fDv7+/v8O/V1dbq6+u4tbe9vL+5uLvQ0NLh4uHh
          4uLa29vFw8WzsLS2tLnJyszf39/n6Ofn5+fm5+bj4+Pl5ubV1dWuq6/h4OCxrrPk5OXi4+Lk5OTl
          5uXi4uLd3t3R0NGyrLHV1tbg39+vqrDGyMvn5+jj5OTj5OPh4eLPzM2xrrLNzc7e3d6rpq3HyMzm
          5uXm5+fj4+To6Ono6ejo6enp6urLyMqxr7HFx8jc2tqln6W+wcTj5OXr7Ozf4ODu7u7Hw8WxsLLD
          xsba2dmdlpy9v8Lf4eHg4eHCvL+ysLTEx8iblZrAwMPs6+vOys2jn6TKy8z///+q/xPdAAAAA3RS
          TlMGiOZEyO1iAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+IFBwAFIfNxQ/sAAAFHSURBVCjPY2BgZGLG
          AEyMDAyMzFgBIwMTdgkmBmYcAK8ECysbO4jNwcEBoji5uKESPLx8/MwC3NycgkLcwszMIqJiUAlx
          CUkWYSlpGVk5eQVubmZFJWWohISKiiq3mrqGppa2ji63nr6BIVTCyNiE1dRMy9zCQs/SyprFxtYO
          KmHv4Ojk7OLq5uzuweyp7OXtAzOK2deP2z+AWRgIONgChYOCzaASZiGhTmE66uEREZHhUYHRMbEw
          O+LiDRISoyLNdJKSklNSddLSM6ASmVnZ9jm5EXmJKXlOhvnRBYVFUIniktKy8orKKicn7urcmvLa
          unqoRENjkzBbdXN1Swu3WE1rW3tHJ1Siq7uHmbO1t7q6uka5j5u5f8JEmB2TJgNDMImNjU01aQoz
          89Rp02H+sGcBhzQnOHCZOeyF8cYHzqjFmRhwJR8AMsRB93SS3h4AAAAldEVYdGRhdGU6Y3JlYXRl
          ADIwMTgtMDUtMDdUMDA6MDU6MzMtMDc6MDASiQGeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1
          LTA3VDAwOjA1OjMzLTA3OjAwY9S5IgAAAABJRU5ErkJggg=="
        />
      </svg>
    );
  }
}

