import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';             
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';

import './App.css';


import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container-fluid light-green-bg'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <Remaining />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <CurrencySelector />
                    </div>
                </div>

                <h3 className='mt-3'>Allocation</h3>
                <div className='row mt-3 allocation-section'>
                    <div className='col'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3 Change-Allocation'>
                    <div className='col'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;