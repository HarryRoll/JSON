import dotenv from "dotenv"
import express, { response } from "express"
dotenv.config()

const Pool = require('pg').Pool;
const pool = new Pool({
    host : "localhost",
    user : "postgres",
    password : "11081993g",
    database : "Tugas-day1",
    port : 5432
})

const app =express()
app.use(express.json())

const port = process.env.PORT || 3003

app.listen(port,()=>console.log(`Server listening on port ${port}`))

app.get('/api/region',(req,res)=>
    pool.query('select * from regions',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    }))

    app.get('/api/region/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from regions where region_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })

        app.post('/api/region/',(req,res)=>{
            const {region_name} = req.body
            pool.query('insert into regions (region_name) values ($1)',
            [region_name],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })

            app.put('/api/region/:id',(req,res)=>{
                const {id} = req.params
                const {name} = req.body
                pool.query("update regions set region_name=$1 where region_id=$2",
                [name,id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/region/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from regions where region_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })

app.get('/api/country',(req,res)=>
pool.query('select * from countries',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/country/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from countries where country_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })

        app.post('/api/country/',(req,res)=>{
            const {id} = req.params
            const {name, region} = req.body
            pool.query('insert into countries (country_id, country_name, region_id) values ($1,$2,$3)',
            [id, name, region],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/country/:id',(req,res)=>{
                const {id} = req.params
                const {name,region} = req.body
                pool.query("update countries set country_name=$1, region_id=$2 where country_id=$3",
                [name,region,id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/country/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from countries where country_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })       



app.get('/api/department',(req,res)=>
pool.query('select * from departments',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/department/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from departments where department_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })


        app.post('/api/department/',(req,res)=>{
            const {name, location} = req.body
            pool.query('insert into departments (department_name, location_id) values ($1,$2)',
            [name, location],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/department/:id',(req,res)=>{
                const {id} = req.params
                const {name,location} = req.body
                pool.query("update departments set department_name=$1, location_id=$2 where department_id=$3",
                [name,location,id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/department/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from departments where department_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })   


app.get('/api/dependent',(req,res)=>
pool.query('select * from dependents',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/dependent/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from dependents where dependent_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })

        app.post('/api/dependent/',(req,res)=>{
            const {firstname, lastname , relation, employee_id} = req.body
            pool.query('insert into dependents (first_name, last_name, relationship, employee_id) values ($1,$2,$3,$4)',
            [firstname, lastname , relation, employee_id],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/dependent/:id',(req,res)=>{
                const {id} = req.params
                const {firstname, lastname , relation, employee_id} = req.body
                pool.query("update dependents set first_name=$1, last_name=$2, relationship=$3, employee_id=$4 where dependent_id=$5",
                [firstname, lastname , relation, employee_id, id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/dependent/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from dependents where dependent_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })   

app.get('/api/employee',(req,res)=>
pool.query('select * from employees',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/employee/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from employees where employee_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })


        app.post('/api/employee/',(req,res)=>{
            const {firstname, lastname , email, phone, hire_date, job_id, salary, manager_id, department_id} = req.body
            pool.query('insert into employees (first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [firstname, lastname , email, phone, hire_date, job_id, salary, manager_id, department_id],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/employee/:id',(req,res)=>{
                const {id} = req.params
                const {firstname, lastname , email, phone, hire_date, job_id, salary, manager_id, department_id} = req.body
                pool.query("update employees set first_name=$1, last_name=$2, email=$3, phone_number=$4, hire_date=$5, job_id=$6, salary=$7, manager_id=$8, department_id=$9 where employee_id=$10",
                [firstname, lastname , email, phone, hire_date, job_id, salary, manager_id, department_id, id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/employee/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from employees where employee_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })   

    
app.get('/api/job',(req,res)=>
pool.query('select * from jobs',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/job/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from jobs where job_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })

        app.post('/api/job/',(req,res)=>{
            const {job_title, min_salary, max_salary} = req.body
            pool.query('insert into jobs (job_title, min_salary, max_salary) values($1,$2,$3)',
            [job_title, min_salary, max_salary],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/job/:id',(req,res)=>{
                const {id} = req.params
                const {job_title, min_salary, max_salary} = req.body
                pool.query("update jobs set job_title=$1, min_salary=$2, max_salary=$3 where job_id=$4",
                [job_title, min_salary, max_salary, id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/job/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from jobs where job_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })   


app.get('/api/location',(req,res)=>
pool.query('select * from locations',
[],
(error,result)=>{
    if(error){
        throw error
    }
    res.status(200).json(result.rows)
}))

    app.get('/api/location/:id',(req,res)=>{
        const {id} = req.params
        pool.query('select * from locations where location_id = $1',
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows)
        })
    })

        app.post('/api/location/',(req,res)=>{
            const {street_address, postal_code, city, state_province, country_id} = req.body
            pool.query('insert into locations (street_address, postal_code, city, state_province, country_id) values($1,$2,$3,$4,$5)',
            [street_address, postal_code, city, state_province, country_id],
            (error,result)=>{
                if(error){
                    throw error;
                }
                res.status(200).json(result.rowCount)
            })
        })


            app.put('/api/location/:id',(req,res)=>{
                const {id} = req.params
                const {street_address, postal_code, city, state_province, country_id} = req.body
                pool.query("update locations set street_address=$1, postal_code=$2, city=$3, state_province=$4, country_id=$5 where location_id=$6",
                [street_address, postal_code, city, state_province, country_id, id],
                (error,result) =>{
                    if(error){
                        throw error;
                    }
                    res.status(200).json(result.rowCount)
                })
            })

                app.delete('/api/location/:id',(req,res)=>{
                    const {id} = req.params
                    pool.query("delete from locations where location_id = $1",
                    [id],
                    (error,result) =>{
                        if(error){
                            throw error;
                        }
                        res.status(200).json(result.rowCount)
                    })
                })   
