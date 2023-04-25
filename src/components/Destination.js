import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import maldive1 from "../assets/maldive1.jpg";
import maldive2 from "../assets/maldives2.jpg";
import japan1 from "../assets/japan1.jpg";
import japan2 from "../assets/japan2.jpg";
import sing1 from "../assets/sing1.jpg";
import sing2 from "../assets/sing2.jpg";
import borac1 from "../assets/borac1.jpg";
import borac2 from "../assets/borac2.jpg";

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData className ="first-des"
             heading ="Yoshino, Japan"
             text ="This is probably Japan’s most famous cherry-bloom destination. The blossoms of over 30,000 sakura trees carpet the 
             Kii Mountains surrounding the town, with the season tending to start in late March. The star of the show is on Mount Yoshino — a huge cherry tree, 
             whose branches bow towards the ground. It is illuminated from dusk until midnight."
             img1={japan1}
             img2={japan2}
             />

            <DestinationData className ="first-des-reverse"
             heading ="Ja Manafaru, Maldives"
             text ="Situated on a private island in the north of the Maldives, JA Manafaru provides luxurious beautifully appointed 
             beach and overwater villas with private outdoor pools. An on-site PADI dive centre, 3 additional outdoor pools and pampering 
             spa treatments are available. The property is spread over 35 acres of peaceful white sandy beach, accessible by either domestic flight, 
             followed by speedboat ride or choice of private charter seaplane transfers from Male."
             img1={maldive1}
             img2={maldive2}
             />

             <DestinationData className ="first-des"
             heading ="Gardens by the Bay, Singapore"
             text ="A national garden and premier horticultural attraction for local and international visitors, Gardens by the Bay is a showpiece of horticulture and garden artistry that presents the plant kingdom in a whole new way, entertaining while educating visitors with plants seldom seen in this part of the world, ranging from species in cool, temperate climates to tropical forests and habitats.

             "
             img1={sing1}
             img2={sing2}
             />

            <DestinationData className ="first-des-reverse"
             heading ="Boracay, Philippines"
             text ="Boracay, one of the top Islands in the Philippines, is popular for its beaches and blessed with a long stretch of powdery white sand, crystal clear and azure waters, and a stunning sunset. Boracay is the most iconic island in the Philipines and has won multiple awards in previous years."
             img1={borac1}
             img2={borac2}
             />
             

        </div>
    )
}
export default Destination;