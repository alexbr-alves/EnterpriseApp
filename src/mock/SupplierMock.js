import { registerSupplier } from "../Repository/databaseRepository";

export default function SupplierMock({ id }) {
    const fornecedor1 = {
        CompanyName: 'ElectroTech Solutions',
        ContactName: 'João Silva',
        ContactTitle: 'Manager',
        Address: 'Rua A, 100',
        City: 'São Paulo',
        Region: 'SP',
        PostalCode: '01000-000',
        Country: 'Brasil',
        Phone: '(11) 1234-5678',
        CompanyId: id
    };

    const fornecedor2 = {
        CompanyName: 'MegaTech Electronics',
        ContactName: 'Maria Souza',
        ContactTitle: 'Director',
        Address: 'Avenida B, 200',
        City: 'Rio de Janeiro',
        Region: 'RJ',
        PostalCode: '20000-000',
        Country: 'Brasil',
        Phone: '(21) 2345-6789',
        CompanyId: id
    };

    const fornecedor3 = {
        CompanyName: 'TechPro Distribuidora',
        ContactName: 'Carlos Pereira',
        ContactTitle: 'Sales Representative',
        Address: 'Rua C, 300',
        City: 'Belo Horizonte',
        Region: 'MG',
        PostalCode: '30000-000',
        Country: 'Brasil',
        Phone: '(31) 3456-7890',
        CompanyId: id
    };

    const fornecedor4 = {
        CompanyName: 'Alliance Tech Solutions',
        ContactName: 'Ana Clara',
        ContactTitle: 'HR Manager',
        Address: 'Avenida D, 400',
        City: 'Porto Alegre',
        Region: 'RS',
        PostalCode: '90000-000',
        Country: 'Brasil',
        Phone: '(51) 4567-8901',
        CompanyId: id
    };

    const fornecedor5 = {
        CompanyName: 'Global Electronics',
        ContactName: 'Lucas Martins',
        ContactTitle: 'CEO',
        Address: 'Rua E, 500',
        City: 'Curitiba',
        Region: 'PR',
        PostalCode: '80000-000',
        Country: 'Brasil',
        Phone: '(41) 5678-9012',
        CompanyId: id
    };

    const fornecedor6 = {
        CompanyName: 'MarketPro Tecnologia',
        ContactName: 'Juliana Oliveira',
        ContactTitle: 'Marketing Manager',
        Address: 'Avenida F, 600',
        City: 'Fortaleza',
        Region: 'CE',
        PostalCode: '60000-000',
        Country: 'Brasil',
        Phone: '(85) 6789-0123',
        CompanyId: id
    };

    const fornecedor7 = {
        CompanyName: 'Solutions Tech Group',
        ContactName: 'Pedro Almeida',
        ContactTitle: 'CTO',
        Address: 'Rua G, 700',
        City: 'Salvador',
        Region: 'BA',
        PostalCode: '40000-000',
        Country: 'Brasil',
        Phone: '(71) 7890-1234',
        CompanyId: id
    };

    const fornecedor8 = {
        CompanyName: 'Prime Electronics',
        ContactName: 'Mariana Lima',
        ContactTitle: 'CFO',
        Address: 'Avenida H, 800',
        City: 'Manaus',
        Region: 'AM',
        PostalCode: '69000-000',
        Country: 'Brasil',
        Phone: '(92) 8901-2345',
        CompanyId: id
    };

    const fornecedor9 = {
        CompanyName: 'Tech Innovations',
        ContactName: 'Carlos Rodrigues',
        ContactTitle: 'COO',
        Address: 'Rua I, 900',
        City: 'Brasília',
        Region: 'DF',
        PostalCode: '70000-000',
        Country: 'Brasil',
        Phone: '(61) 9012-3456',
        CompanyId: id
    };

    const fornecedor10 = {
        CompanyName: 'Smart Solutions',
        ContactName: 'Fernando Lima',
        ContactTitle: 'Coordinator',
        Address: 'Praça J, 1000',
        City: 'Recife',
        Region: 'PE',
        PostalCode: '50000-000',
        Country: 'Brasil',
        Phone: '(81) 3456-7890',
        CompanyId: id
    };



    registerSupplier(fornecedor1);
    registerSupplier(fornecedor2);
    registerSupplier(fornecedor3);
    registerSupplier(fornecedor4);
    registerSupplier(fornecedor5);
    registerSupplier(fornecedor6);
    registerSupplier(fornecedor7);
    registerSupplier(fornecedor8);
    registerSupplier(fornecedor9);
    registerSupplier(fornecedor10);
}
