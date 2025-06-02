import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarInset,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem
} from "@/components/ui/sidebar.tsx";
import {ContributionGuideContent} from "@/components/ContributionGuideContent.tsx";
import {Link} from "react-router-dom";

export function ContributionGuide() {
  return(
    <div className="flex flex-1 min-h-screen bg-chatbot-bg">
      {/*<aside className={`top-16 h-[calc(100vh-4rem)]`}>*/}
        <Sidebar className={``} variant={`inset`}>
          <SidebarInset>
            <SidebarContent>
              <SidebarGroup className={`mt-9`}>
                <div className={`text-black font-bold text-4xl flex gap-3 place-content-center`}>
                  <Link to={`/`}>
                    <img src="/panayhub-logo.png" alt={`panayhub logo`}/>
                  </Link>
                  <Link to={`/`}>
                    <h1>PanayHub</h1>
                  </Link>
                </div>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel className={`font-semibold text-xl`}>Outline</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={`hover:cursor-pointer`}>
                      <SidebarMenuButton asChild>
                        <a href={`#introduction`}>
                         <span className={``}>
                           Introduction
                         </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={`hover:cursor-pointer`}>
                      <SidebarMenuButton asChild>
                        <a href={`#exploring`}>
                         <span className={``}>
                           Exploring the Ontology Classes
                         </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={`hover:cursor-pointer`}>
                      <SidebarMenuButton>
                        <a href={`#adding-folk`}>
                             <span className={``}>
                               Adding a Folk Narrative
                             </span>
                        </a>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton>
                            <a href={`#step-1`}>
                             <span className={``}>
                               Step 1
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton>
                            <a href={`#step-2`}>
                             <span className={``}>
                               Step 2
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </SidebarInset>
        </Sidebar>
      {/*</aside>*/}
      <ContributionGuideContent/>


    </div>
  );
}