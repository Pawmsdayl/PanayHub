import Chatbox from "@/components/Chatbox.tsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
function ChatbotPage() {
  return (
    <div className={`w-full h-[calc(100vh-128px)] bg-(--chatbot-bg-color)`}>
     <div className={`flex w-full h-full`}>
       <div className={`flex w-full h-full gap-3  place-content-center p-10`}>
         <div className={`text-white bg-chatbot-light h-full w-full rounded-full text-center content-center`}>hello</div>
         <Chatbox></Chatbox>
           <div className={`text-white bg-chatbot-light rounded-[56px] flex flex-col gap-2 h-full w-full text-center content-center p-5`}>
           <div className={`flex gap-3`}>
             <button className={`hover:cursor-pointer`}>
              <FaEdit className={`size-5`}/>
             </button>
             <button className={`hover:cursor-pointer`}>
               <FaMagnifyingGlass className={`size-5`}/>
             </button>
           </div>
           <div className={`bg-notes-bg h-full w-full rounded-4xl `}>
             <div className={`content p-5 overflow-y-auto h-full`}>
              <h1 className={`font-bold text-3xl text-white`}>
                This is content
              </h1>
              <p className={`text-white`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est euismod, feugiat massa ac, tincidunt mauris. Proin varius ligula eu felis mollis mattis eu eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, urna at ornare accumsan, justo velit laoreet turpis, vestibulum tempor felis odio non ipsum. Proin ut tincidunt nulla. Proin molestie scelerisque ligula luctus dapibus. Duis sit amet imperdiet sapien, at blandit sapien. Sed feugiat vehicula diam venenatis accumsan. Nam placerat pellentesque ipsum, vel tincidunt risus scelerisque eget. Etiam velit ipsum, sollicitudin in pellentesque id, molestie sit amet justo. Cras posuere turpis nec nunc luctus porta. Etiam sapien leo, mattis et scelerisque a, pulvinar vel ex. Vestibulum venenatis id odio in pretium.

                Curabitur facilisis rutrum mauris et volutpat. Maecenas at erat congue, bibendum tortor eget, varius nibh. Aenean sagittis mollis suscipit. Nam lorem magna, feugiat quis suscipit ac, aliquet a mi. Cras mollis condimentum luctus. Etiam porttitor enim a neque maximus viverra. Sed quis tempor eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at euismod purus.

                Mauris leo enim, imperdiet facilisis auctor nec, luctus sit amet libero. Suspendisse est nunc, pretium sit amet metus eu, iaculis euismod nulla. Proin justo quam, accumsan quis libero ac, fermentum sagittis velit. Donec bibendum sit amet sem non condimentum. Nulla congue, orci eu cursus elementum, augue velit placerat justo, vel pharetra eros justo eget nisl. Nulla in urna sit amet tellus iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Nam nisl leo, volutpat vel massa eget, ornare bibendum sapien. Curabitur convallis neque in aliquam molestie. Maecenas consectetur elit nec tincidunt commodo. Fusce ullamcorper pulvinar bibendum. Integer molestie mi sapien, quis rhoncus tellus malesuada ultrices. Cras fringilla risus id dui interdum, pellentesque interdum quam convallis. Sed sodales libero et massa placerat, nec condimentum diam fermentum. Pellentesque vulputate metus sed metus semper maximus. Morbi ac magna commodo, auctor urna rhoncus, vehicula nisi. Sed id nisi ullamcorper leo maximus dictum.

                Praesent vitae laoreet ex. Nunc a venenatis tortor, ut ullamcorper dui. Maecenas dictum mi id ligula gravida, sit amet convallis nisi eleifend. Aliquam efficitur mattis neque. Aenean egestas felis vitae lectus efficitur, sit amet consequat elit auctor. Proin malesuada lacus ut orci malesuada, nec faucibus tellus dictum. Nullam nisl turpis, posuere id lorem at, ultricies fermentum urna. Integer nisl tellus, blandit eu egestas vel, facilisis ac massa. Duis in nibh consectetur, vehicula lectus id, consectetur nibh. Aenean luctus magna fermentum malesuada tristique. Quisque pharetra tortor ac sapien tempor accumsan.
              </p>
             </div>
           </div>
         </div>
       </div>

     </div>
    </div>
  );
}

export default ChatbotPage;