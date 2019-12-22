import React from 'react';
import { Grid, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import './menuSecondary.styles.css';
import 'react-flags-select/css/react-flags-select.css';


const MenuSecondary = () => {
  return (
    <Container className='global-banner' fluid
      
    >
      <Grid columns={3}>
        <Grid.Row color='black'>
          <Grid.Column></Grid.Column>
          <Grid.Column textAlign='center' verticalAlign='middle'>
            <Link to='/' className='global__banner-link'>END OF SEASON SALE UP TO 40% OFF</Link>
          </Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Column>
                <Container className='global__utility-menu' textAlign='right'>
                  <ReactFlagsSelect
                    defaultCountry="PH" 
                    countries={["US", "PH"]}
                    customLabels={{"US": "United States", "PH" : "Philippines"}}
                  />
                  <Link to='/' className='global__banner-link'>Stores</Link>
                  <Link to='/' className='global__banner-link'>Log in</Link>
                </Container>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MenuSecondary;