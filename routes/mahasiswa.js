const express=require("express");
const router=express.Router();
const db=require("../config/mysql");

router.get('/',(req,res,next) =>{
    var mysql="SELECT*FROM mahasiswa";
    db.query(mysql,(err,result)=>{
        res.status(200).json({
            message:"Get method mahasiswa",
            data:result
        })
    })
    
})

// request query param
router.get('/search',(req,res,next) =>{
    const nime=req.query.nime;
    var mysql="SELECT*FROM mahasiswa WHERE nime="+nime;
    db.query(mysql,(err,result)=>{
        if(result.data != 0){
            res.status(200).json({
                message:"data di temukan",
                data:result
            })
        }else{
            res.status(200).json({
                message:"data tidak di temukan",
                data:result
            })
        }
        
    })
    
})
// =========

router.post('/',(req,res,next) =>{
    const nime=req.body.nime;
    const nama=req.body.nama;
    const jurusan=req.body.jurusan;
    var mysql="INSERT INTO mahasiswa (nime,nama,jurusan) VALUES ('"+nime+"','"+nama+"','"+jurusan+"')";
    db.query(mysql,(err,result)=>{
        res.status(200).json({
            message:"Berhasil input data",
            
        })
    })
})

router.get('/:nime',(req,res,next) =>{
    const nime=req.params.nime;

    var mysql="SELECT*FROM mahasiswa WHERE nime="+nime;
    db.query(mysql,(err,result)=>{
        res.status(200).json({
            message:"Get method mahasiswa",
            data:result
        })
    })
    
  
})

router.put('/',(req,res,next) =>{
    const nime=req.body.nime;
    const nama=req.body.nama;
    const jurusan=req.body.jurusan;
    var mysql="UPDATE mahasiswa SET nama='"+nama+"',jurusan='"+jurusan+"' WHERE nime="+nime;
    db.query(mysql,(err,result)=>{
        res.status(200).json({
            message:"Berhasil ubah data:"+nime,
            
        })
    })
})

router.delete('/:nime',(req,res,next) =>{
    const nime=req.params.nime;
    var mysql="DELETE FROM mahasiswa WHERE nime="+nime;
    db.query(mysql,(err,result)=>{
        res.status(200).json({
            message:"Berhasil delete data:"+nime,
            
        })
    })
})

module.exports = router