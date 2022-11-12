import { useState } from 'react';
import planesData from '../planes.json';


export const usePlans = () => {

    const [plans, setPlans] = useState(planesData);

  return {plans}
}
