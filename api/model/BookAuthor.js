class BookAuthors{
        fetchBookAuthor(req, res) {
            const query = `
            SELECT ID, authorName, authorSurname, bookID
            FROM BookAuthor;
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
    
        fetchBookAuthor(req, res){
            const query =`
            SELECT ID, authorName, authorSurname, bookID
            FROM BookAuthor;
            WHERE id = ${req.params.id};
            `
            db.query(query,(err, result)=>{
                    if(err) throw err
                    res.json({
                        status: res.statusCode,result
                    })
                })
        };
    
        updateBookAuthor(req, res) {
            const query =`
            UPDATE BookAuthor
            SET?
            WHERE id = ?;
            `
            db.query(query,
                [req.body, req.params.id],
                (err)=>{
                    if (err) throw err
                    res.json({
                        status: res.statusCode,
                        msg:'The book Author record was updated'
                    })
                }
                )
        };
        deleteBookAuthor(req, res){
            const query = `
            DELETE FROM BookAuthor
            WHERE bookAuthor = ${req.params.id};
            `
            db.query(query, (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: 'Book Author deleted from the list'
                })
            })
        }

}

module.exports = BookAuthors