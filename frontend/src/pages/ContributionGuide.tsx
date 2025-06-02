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
        <Sidebar className={`bg-chatbot-bg pt-32 left-0`} variant={`inset`}>
          <SidebarInset>
            <SidebarContent>
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
                      <SidebarMenuButton asChild>
                        <a href={`#adding-folk`}>
                             <span className={``}>
                               Adding a Folk Narrative
                             </span>
                        </a>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
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
                          <SidebarMenuButton asChild>
                            <a href={`#step-2`}>
                             <span className={``}>
                               Step 2
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
                            <a href={`#step-3`}>
                             <span className={``}>
                               Step 3
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
                            <a href={`#step-4`}>
                             <span className={``}>
                               Step 4
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
                            <a href={`#step-5`}>
                             <span className={``}>
                               Step 5
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
                            <a href={`#step-6`}>
                             <span className={``}>
                               Step 6
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild>
                            <a href={`#done`}>
                             <span className={``}>
                               You're Done!
                             </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href={`#adding-entity`}>
                         <span className={``}>
                           Adding An Entity
                         </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href={`#deleting-entity`}>
                         <span className={``}>
                           Deleting An Entity
                         </span>
                        </a>
                      </SidebarMenuButton>
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