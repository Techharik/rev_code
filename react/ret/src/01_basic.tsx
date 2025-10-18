import React, { useState } from "react";
import Buttons from './componnets/Buttons';
import Card from './componnets/Card';
import wrapper from './componnets/Hoc'


const CompWrapper = wrapper(Buttons)
const App = () => {
  const [state, setState] = useState(0);


  return <div className="bg-red-400">
    My Application.{state}
    {/* components */}
    {/* //props */}
    {/* <Buttons lable='name of the button' /> */}
    {/* Passinf a objec */}

    <Buttons props={{ lable: 'buttom', style: 'primary' }} />
    <button onClick={() => setState((prev) => prev + 1)}>click</button>
    {/* consditional rendering */}
    {
      state > 5 ? <h1>This is render only after the state value is greatter than 5</h1> : <h1>Bellow Five</h1>


    }
    {
      state > 6 && <p>This will render</p>
    }
    {/* composition */}
    <Card value='hh'>Hello Everyone</Card>

    {
      [1, 2, 3,].map((x) => {
        return <div key={x}>{x}</div>
      })
    }

    <CompWrapper props={{ lable: 'buttom', style: 'HOC' }} />
  </div>;
};

export default App;
