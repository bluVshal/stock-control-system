import React from 'react';
import {Header, Image, Table} from 'semantic-ui-react';

const DisplayTable = (props) => {
    const datDis = props.prod
    return( 
            <Table.Body>
                <Table.Row key={datDis.id}>
                    <Table.Cell>
                        {datDis.id}
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image
                                className="product-image"
                                src={datDis.image}
                            />
                            <Header.Content>
                                {datDis.title}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        {datDis.price}
                    </Table.Cell>
                    <Table.Cell>
                        {datDis.description}
                    </Table.Cell>
                    <Table.Cell>
                        {datDis.category}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>

    )
}

export default DisplayTable