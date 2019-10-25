import { gql } from 'apollo-server-express';

export default gql`
	type Factura {
		id: Int!,
        pedido_id: Int!,
        costo_total: Int!,
        impuesto_IVA: Int!
	}

	type Query {
		getFacturas: [Factura]!
	}

	type Mutation {
		createFactura(id: Int!): Factura!
	}
`;