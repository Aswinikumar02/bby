import React, {Component} from 'react';
import { Form, Input, TextArea, Button, Dropdown, Grid, Card, Header} from 'semantic-ui-react';
const typeOptions = [
  { key: "option 1", value: "option 1", text: "option 1" },
  { key: "option 2", value: "option 2", text: "option 2" }
];
const descriptionOptions = [
  { key: "Above Image", value: "Above Image", text: "Above Image" },
  { key: "Below Image", value: "Below Image", text: "Below Image" }
];
export default class Layout extends Component{
  constructor() {
    super();
    this.state = {
      active: true
    }

  }
  handleClose(){
    this.setState({active: false});
    this.props.closeModal();
  }
  render(){
    const {active} = this.state;
    return(
      <Dimmer active={active} page>
<div>
        <Card style = {{width: "100%", backgroundColor:'#f2f2f2'}}>
          <Form>
    <Grid style={{marginTop:'3%'}}>
        <Grid.Row >
            <Grid.Column><Header as='h3' style={{textAlign:"center", color:'#003E6A ', fontSize:'120%'}}>Display Field 1</Header></Grid.Column>
        </Grid.Row>
       <Grid.Row>
         <Grid.Column width={4}></Grid.Column>
         <Grid.Column width={4}>
         <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Type</label>
         </Grid.Column>
         <Grid.Column width={4}>
           <Dropdown placeholder='Type' search selection options={typeOptions} />
         </Grid.Column>
         <Grid.Column width={4}></Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column width={4}></Grid.Column>
         <Grid.Column width={4}>
         <label style={{color:'#003E6A', fontSize:'120%',fontWeight:"bolder"}}>Image URL</label>
         </Grid.Column>
         <Grid.Column width={4}>
         <Input placeholder='Image URL' />
         <p style={{textAlign:"justify", fontWeight:"bolder"}}>Upload image must be within bestbuy server within the dimension(150*150) and format (jpg/png/jpeg/gif)</p>
         </Grid.Column>
         <Grid.Column width={4}></Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column width={4}></Grid.Column>
         <Grid.Column width={4}>
         <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Content URL</label>
         </Grid.Column>
         <Grid.Column width={4}>
         <Input placeholder='Content URL' />
         </Grid.Column>
         <Grid.Column width={4}></Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column width={4}></Grid.Column>
         <Grid.Column width={4}>
         <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Button Text</label>
         </Grid.Column>
         <Grid.Column width={4}>
         <Input placeholder='Button Text' />
         </Grid.Column>
         <Grid.Column width={4}></Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column width={4}></Grid.Column>
         <Grid.Column width={4}>
         <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Description</label>
         </Grid.Column>
         <Grid.Column width={4}>
            <Form.TextArea  placeholder='Tell us more about you...'></Form.TextArea>
            <p style={{textAlign:"justify", fontWeight:"bolder"}}>Enter description within 66 character</p>
        </Grid.Column>
         <Grid.Column width={4}></Grid.Column>
       </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
              <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Description Option</label>
          </Grid.Column>
          <Grid.Column width={4}>
               <Dropdown placeholder='Description Option' search selection options={descriptionOptions} />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row style={{marginBottom:'2%'}}>
      <Grid.Column width={6}></Grid.Column>
      <Grid.Column width={4}>
        <Button style={{marginTop:'2%', marginBottom:'2%', backgroundColor:'#003E6A', color:'white'}} content='Fetch URL'></Button>
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
      </Grid.Row>
    </Grid>
    </Form>
    </Card>

</div> </Dimmer>   );
  }
}
