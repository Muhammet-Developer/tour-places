import "./Card.css";

function Card({data}){
    return(
        <div className="row ms-2" >
        {
            data.map((person,index)=>{
                const{id,image,desc,title}=person
                //console.log(person);
                return(
                    <>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3 card1" key={id}  >
                      < div className="card" style={{ width :"18rem"}}>
                     <img src={image} alt="img"  className="card-img-top " />
                    <div className="card-body mt-2 card2">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{desc}</p>
                    </div>
                    </div>
                    </div>
                    </>

                    )
            })
        }
    </div>
    )
}
export default Card;