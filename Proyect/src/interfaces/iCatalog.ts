// Used to create or update an instance in the DB
// Is used in the backend
export interface iCatalogAttributes {
    id: number;
    description: string;
    status?: boolean;
}

// Used to query the DB or inf. is return from DB
export interface iCatalogInstance {
    id: number;
    description: string;
    status: boolean;

    //Sequelize mandatory
    createdAt: Date;
    updatedAt: Date;
}
