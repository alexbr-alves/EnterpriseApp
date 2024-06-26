import * as SQLite from 'expo-sqlite';

const dbName = 'company_app.db';

const db = SQLite.openDatabase(dbName);

const createTableCattegories = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS categories (
                CategoryID INTEGER PRIMARY KEY AUTOINCREMENT,
                CategoryName TEXT,
                Description TEXT,
                CompanyId TEXT
            );`
        );
    });
};

export const registerCategoryDB = (category) => {
    createTableCattegories()
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM categories WHERE CompanyId = ? AND CategoryName = ? AND Description = ?',
                [category.CompanyId, category.CategoryName, category.Description],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        console.log('Categoria já cadastrada!');
                    } else {
                        tx.executeSql(
                            'INSERT INTO categories (CategoryName, Description, CompanyId) VALUES (?, ?, ?)',
                            [
                                category.CategoryName,
                                category.Description,
                                category.CompanyId
                            ],
                            (_, { rowsAffected }) => {
                                if (rowsAffected > 0) {
                                    console.log('Categoria cadastrada com sucesso!');
                                } else {
                                    console.log('Erro ao cadastrar a categoria.');
                                }
                            }
                        );
                    }
                }
            );
        },
        error => console.error('Erro ao cadastrar a categoria:', error, category)
    );
};

export const getCategoriesDB = (companyId, callback) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM categories WHERE CompanyId = ?',
                [companyId],
                (_, { rows }) => {
                    const categories = [];
                    for (let i = 0; i < rows.length; ++i) {
                        categories.push(rows.item(i));
                    }
                    callback(categories);
                }
            );
        },
        error => console.error('Erro ao obter categorias da empresa:', error)
    );
};
