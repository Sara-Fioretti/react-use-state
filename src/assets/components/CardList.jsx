import Card from "./Card";
import languages from "../../languages";

function CardList(){
    return(
        <div className="flex">
            {languages.map((language)=>(
                 <Card
                 key={language.id}
                 title={language.title}
                 description={language.description}>
                 </Card>
            ))
            }
           
        </div>
    )
};

export default CardList;