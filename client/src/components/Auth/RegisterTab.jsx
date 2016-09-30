import React, { PropTypes } from 'react'

import { Grid, Cell, Textfield, Button } from 'react-mdl'

const RegisterTab = (props) => {
  function handleAuth (event) {
    event.preventDefault()
    let authData = {
      type      : 'register',
      name      : document.getElementsByTagName('INPUT')[1].value,
      email     : document.getElementsByTagName('INPUT')[2].value,
      password  : document.getElementsByTagName('INPUT')[3].value
    }
    props.handleAuth(authData)
  }

  return (
    <Grid>
      <Cell col={6} >
        <form onSubmit={handleAuth} >
          <Textfield
            floatingLabel
            label='Name'
            // value={props.profile.name}
            style={{ width: '200px' }}
            />
          <Textfield
            floatingLabel
            label='Email'
            // value={props.profile.email}
            style={{ width: '200px' }}
            />
          <Textfield
            floatingLabel
            type='password'
            label='Password'
            // value={props.profile.password}
            style={{ width: '200px' }}
            />
          {/* <Textfield
            floatingLabel
            type='password'
            label='Confirm password'
            onChange={() => {}}
            style={{ width: '200px' }}
            /> */}
          <Button type='submit' className='auth-tab__button-success'>
              Submit
          </Button>
        </form>
      </Cell>
      <div className='auth-divider' />
      <Cell col={6} className='middle auth-tab__container'>
        <Button className='auth-tab__social auth-tab__social-google'>
          <span className='auth-tab__social-icon'>
            <i className='fa fa-google-plus fa-lg' aria-hidden-true />
          </span>
          <span className='auth-tab__social-text'>
            {props.authText} with Google
          </span>
        </Button>
        <Button className='auth-tab__social auth-tab__social-facebook'>
          <span className='auth-tab__social-icon'>
            <i className='fa fa-facebook fa-lg' aria-hidden-true />
          </span>
          <span className='auth-tab__social-text'>
            Sign up with Facebook
          </span>
        </Button>
        <Button className='auth-tab__social auth-tab__social-twitter'>
          <span className='auth-tab__social-icon'>
            <i className='fa fa-twitter fa-lg' aria-hidden-true />
          </span>
          <span className='auth-tab__social-text'>
            Sign up with Twitter
          </span>
        </Button>
      </Cell>
    </Grid>
  )
}

RegisterTab.propTypes = {
  handleAuth  : PropTypes.func.isRequired
}

export default RegisterTab
