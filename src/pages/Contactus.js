import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function Contactus() {


  return (
        <div className="contactus"> 
            <Grid style={{ color:"#ffff"}}>
                <Card style={{ backgroundColor:"whitesmoke", maxWidth: 450,margin:"140px auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography style={{color:"tomato", fontWeight:"600"}} gutterBottom variant="h5">
                    Contact Us
                    </Typography> 
                    <Typography style={{color:"black", fontWeight:"500"}} variant="body2" color='#fff' component="p" gutterBottom>
                    Fill up the form and our team will get back to you within 24 hours.
                    </Typography> 
                    <form style={{ color: "#ffff", backgroundColor:"whitesmoke", padding:"20px", marginTop:"5px", border:"none"}}>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                        <TextField style={{ backgroundColor:"whitesmoke", borderRadius:"5px"}} placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <TextField style={{ backgroundColor:"whitesmoke", borderRadius:"5px"}} placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField style={{ backgroundColor:"whitesmoke", borderRadius:"5px"}} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField style={{ backgroundColor:"whitesmoke", borderRadius:"5px"}} type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField style={{ backgroundColor:"whitesmoke", borderRadius:"5px"}} label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <Button style={{ color:"white", backgroundColor:"#000e3e", borderRadius:"5px", fontWeight:"500", marginTop:"10px"}} type="submit" variant="contained" color="blue" fullWidth>Submit</Button>
                        </Grid>

                    </Grid>
                    </form>
                </CardContent>
                </Card>
            </Grid>
        </div>
  );
}

export default Contactus;