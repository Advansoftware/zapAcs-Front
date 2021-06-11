import { Grid } from '@material-ui/core';
import React from 'react';
import styles from '../assets/components/Dashboard.module.css'
import Cards from './DashboardCard';
 const Dashboard = () =>{
    return(
        <div>
            <h1 className={styles.texto}>Dashboard</h1>
            <Grid container sapacing={2}>
            
                <Grid item xs={12}>
                    <Cards></Cards>
                </Grid>
            </Grid>
        </div>
    );
}
export default Dashboard;