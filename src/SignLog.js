import React from 'react';
import { Avatar, Button, Grid, Paper, TextField,Typography } from '@material-ui/core';

const SignLog = ({email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAcc,setHasAcc,emailError,passwordError}) => {
   
    const paperStyle = {padding:40, height:'70vh', width:300, margin:'30px auto'}
    const avatarStyle= {backgroundColor:'green'}
   
    return (
        <div>
            <Grid>
                <Paper elevation = {11} style = {paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}></Avatar>
                        {/* <div style={{color:'red',fontsize:'3px'}}>{errMsg}</div>  */}
                        <h2>Sign In</h2>
                        <TextField required 
                        label="Username" 
                        placeholder="Enter Username OR Phone number"
                        value = {email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                        <p>{emailError}</p>
                        <TextField required
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        
                        />
                        <p>{passwordError}</p>
                    </Grid>
                 <br></br>
                 <div >
                     {hasAcc ? (
                         <>
                            <Typography align='center'>
                                <Button onClick={handleLogin}
                                    variant="contained"
                                    color="primary" 
                                    disableElevation
                                >
                                 Sign In
                                </Button>
                            </Typography>
                            <p>can`t have an account ? <Button variant="outlined" color="secondary" onClick={() => setHasAcc(!hasAcc)}>Sign up</Button></p>
                         </>
                   
                     ):(
                         <> 
                         <Typography align='center'>
                            <Button onClick={handleSignUp}
                                variant="contained"
                                color="primary" 
                                disableElevation
                            >
                            Sign up
                            </Button>
                            </Typography>
                            <p>Have an account ? <Button variant="outlined" color="secondary" onClick={() => setHasAcc(!hasAcc) }>Sign In</Button></p>
                         </>
                    ) }
                </div>
            </Paper>
            </Grid>
        </div>
    )
}

export default SignLog;
