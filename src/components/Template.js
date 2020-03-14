import React from 'react';
import Customer from './../Customer';

class Template extends React.Component{
	state = {
	    customers : [
	      { name: 'Harry Potter', desc: 'The main character of the series. Orphaned son of James and Lily Potter, and Gryffindor student at Hogwarts. The husband of Ginny Weasley, father of James Sirius, Albus Severus and Lily Luna Potter.', id:'1' },
	      { name: 'Ron Weasley', desc:"Youngest son of Arthur and Molly Weasley who is best friends with Harry Potter and Hermione Granger. Gryffindor Quidditch Keeper, prefect, and member of Dumbledore's Army.", id:'2' },
	      { name: 'Hermione Granger', desc: "Muggle-born Gryffindor student in Harry's year and one of his best friends. Prefect and co-founder of Dumbledore's Army.", id:'3' }
	    ]
	  };
	render(){
		return (
			<div className="container">
				<h4 className="center">Showing records using Template</h4>
				<Customer customers = {this.state.customers} />
			</div>
		)
	}
}

export default Template;