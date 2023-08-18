class Books{
    fetchBooks(req, res) {
        const query = `
        SELECT bookId,bookTitle, bookURL
        FROM Books;
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            }
            )
    };

    fetchBooks(req, res){
        const query =`
        SELECT bookId,bookTitle, bookURL
        FROM Books;
        WHERE bookID = ${req.params.id};
        `
        db.query(query,(err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,result
                })
            })
    };

    updateBooks(req, res) {
        const query =`
        UPDATE Books
        SET?
        WHERE bookID = ?;
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg:'The book record was updated'
                })
            }
            )
    };
    deleteBooks(req, res){
        const query = `
        DELETE FROM Books
        WHERE bookID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'book deleted from the list'
            })
        })
    }

}






module.exports = Books