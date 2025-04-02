'use client'

import React, { useState } from 'react'
import { Tabs, Tab, Card, CardBody, RadioGroup, Radio, Divider,Chip } from "@nextui-org/react";
import DaysSection from '@/components/DaysSection';
import { Accordion, AccordionItem } from "@nextui-org/react";
import Weather from '@/components/Weather';
import Hotel from '@/components/cards/Hotel';
import ShopProduct from '@/components/cards/ShopProduct';
function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

// const data = {
// introduction:'intro',
// accomodation:'Accomodation',
// lifestyle:'Lifestyle',
// weather:'intro',
// activities:'intro',
// rest:'intro',
// introduction:'intro',
// introduction:'intro',
// }

const Section = () => {
  return (
    <>
      <div className="flex flex-col px-4">
        <div className="flex w-full flex-col py-10">
          {/* <Tabs key='underlined' variant='underlined' aria-label="Tabs variants" placement='top' color='primary' size='lg'> */}
          <Tabs key='underlined' variant='underlined' aria-label="Tabs variants" placement='start' color='primary' size='max' isVertical='true'>
            <Tab key="intro" title="Introduction"  >
              <Card >
                {/* <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis maxime pariatur, ipsum iste et. Quas debitis adipisci, accusamus quidem harum at maxime unde dicta nisi aut sapiente tempore laudantium!
                  Rerum et quasi excepturi officiis atque corporis, quis repellat iste sed libero sequi consequatur eum, velit quibusdam aspernatur dolorem iure unde adipisci at tenetur totam. Repudiandae sint et illo soluta!
                  Doloribus quidem ducimus ea! Dolor mollitia cumque provident ad qui repellendus, eaque veniam corporis voluptatibus animi recusandae labore vitae quis inventore sequi aliquid voluptates! Sed suscipit quisquam consequuntur inventore porro.
                  Quaerat voluptas ea consectetur eaque facere asperiores harum nisi et dolores alias quidem dolorem debitis placeat reiciendis autem saepe, error vero! Mollitia, est doloremque saepe ea voluptas distinctio incidunt numquam.
                  Voluptates dicta, harum nisi enim nobis error itaque impedit officiis saepe alias mollitia reiciendis. Possimus non, adipisci deserunt similique laborum explicabo magnam veritatis mollitia tenetur eius laudantium in pariatur. Esse.
                  Incidunt qui, est tempore quibusdam libero reiciendis debitis, doloremque velit error, totam nam ad rem maxime minima vitae autem ducimus sit sapiente excepturi. Eos odio debitis quae minus, autem eligendi.
                  Voluptas ullam error dolores dolor laboriosam. Facere iste praesentium ad ea officiis ullam esse animi similique, nemo quam quibusdam voluptates tempora quos eum magni inventore enim? Enim accusantium voluptate sit.
                  Amet beatae aut corrupti saepe quam, veniam magnam, excepturi rem a accusamus, laudantium fugiat facilis similique vel ullam impedit et porro sapiente dignissimos magni optio? Sed culpa obcaecati earum neque.
                  Et, dignissimos maiores exercitationem accusantium nulla perferendis, delectus saepe iusto enim veritatis, omnis temporibus neque. Tempore distinctio ex iure ipsam reiciendis, consequatur natus, illum molestiae nihil laborum magnam. Aliquam, optio.
                  Perspiciatis inventore nisi iste vero natus tenetur atque eum commodi pariatur! Alias neque unde debitis voluptate consequuntur sapiente distinctio sequi, odio eveniet eligendi animi minima error iste praesentium hic ad.
                  Minus maxime blanditiis voluptate corporis, iste porro. Possimus quis esse illo provident ab reprehenderit quibusdam iusto aut, ipsam numquam, recusandae error quae quod dolor nesciunt quasi. Vero quas possimus quaerat.
                  Sed in dicta dolorum repellendus porro rerum dolorem qui voluptate impedit blanditiis exercitationem, nisi voluptas corrupti ducimus, ut accusamus labore mollitia consectetur eaque amet cumque! Hic alias ex dolor eius?
                  Modi explicabo fugit rem quibusdam sapiente in laudantium perferendis? Rerum provident adipisci nisi alias rem, debitis libero nihil ducimus tempore error quae dolorem consequuntur quidem totam, distinctio delectus veritatis eveniet?
                  Dolores cumque repudiandae quis debitis sint, provident natus blanditiis, alias ipsum quas libero. Doloribus nulla iste cupiditate laudantium magnam! Maiores, sed. Sequi officiis eligendi repudiandae quaerat doloribus odio rerum quia!
                  Est, natus et? Placeat deserunt corrupti soluta, quos, dolorem autem distinctio iste unde laudantium temporibus nostrum voluptatum saepe quam commodi eaque ipsam nemo. Repellat corrupti sit ipsam voluptatibus sunt dolorem!
                  Deserunt, architecto officiis. Praesentium, ipsum. Sint tenetur illo atque debitis exercitationem, fugiat maiores amet explicabo repellat voluptates eligendi optio culpa officiis iusto autem minima vitae, dolor odio architecto aperiam hic?
                  Aut, animi veritatis. Aliquam culpa blanditiis libero voluptates ducimus iste molestias dolores fugit? Est enim voluptate, aliquid eius quas blanditiis sunt eum possimus dolor fuga natus aperiam nihil nostrum? Possimus.
                  Sed cumque voluptatum soluta temporibus reprehenderit cupiditate obcaecati voluptates cum! Earum doloribus, pariatur sint aperiam possimus unde amet similique, ipsa consectetur quos nobis perspiciatis quas reiciendis optio nostrum suscipit ipsam!
                  Pariatur distinctio vitae cupiditate corporis beatae ipsa esse aliquam, recusandae, consequuntur vero nostrum maxime blanditiis culpa nesciunt atque est alias at dolore deleniti! Blanditiis, accusamus! Earum accusamus eveniet a officiis!
                  Facilis quis dolore optio, nostrum itaque doloremque. Consectetur, dolor sunt dolorem expedita quia delectus culpa eligendi error. Ullam, quod architecto non et recusandae adipisci quasi sit quia aspernatur, debitis reprehenderit.
                </CardBody> */}
                {/* <CardBody >
                  <Weather/>
                </CardBody> */}
                {/* <CardBody className='flex flex-row flex-wrap justify-center gap-4 p-4 py-8'>
                  <Hotel />
                </CardBody> */}
                <CardBody className='flex flex-row flex-wrap justify-center gap-4 p-4 py-8'>
                {/* <App /> <ShopProduct/>  <ShopProduct/> */} <ShopProduct/>
                </CardBody>
              </Card>
              <Card>
              </Card>
            </Tab>
            <Tab key="accomodation" title={
            <div className="flex items-center space-x-2">
              {/* <VideoIcon/> */}
              <span>Videos</span>
              <Chip size="sm" variant="faded">1</Chip>
            </div>
          } >
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  {/* <App /> */}
                </CardBody>
              </Card>
            </Tab>

            <Tab key="lifestyle" title="lifestyle" >
              <div>
                <h1>
                  Hi
                </h1>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, debitis! Accusantium voluptatibus totam eos tempore, maxime nesciunt laudantium eius. Aliquid reiciendis omnis, eos debitis odit molestiae totam eaque commodi suscipit!
        Consectetur, optio culpa? Id qui nobis sunt libero voluptatibus! Itaque repellat velit quae cum nemo impedit fugiat reprehenderit, culpa ipsam necessitatibus voluptatum voluptatem, amet vel voluptatibus laboriosam, ipsa eveniet? Est.
        Consectetur tenetur impedit est eligendi voluptates. Maiores libero natus veritatis? Ab quas, autem quo minima fugit dolor iste consequatur, iure praesentium nemo est numquam, maxime fugiat doloremque voluptatem libero. Illum!
        Dolore quidem dolores doloremque est commodi provident illum, aperiam officia labore. Inventore maiores consectetur velit soluta cupiditate dolorum nesciunt earum. Aspernatur, dignissimos. At veritatis deserunt aliquid tempora ratione et facilis.
        Dicta modi, unde repudiandae aliquid ipsam iure? Deserunt labore veniam incidunt distinctio sequi nulla totam, modi amet dicta iusto ipsum eius est rerum vitae quaerat laudantium temporibus quis rem. Adipisci.
        Eaque, inventore! Dolores perferendis quae aliquid error accusantium soluta dolore officiis libero sequi nulla eligendi repellendus exercitationem cum quisquam voluptate autem molestiae veniam, commodi voluptas nesciunt deleniti culpa iure rerum.
        Nobis atque rem, unde dolorem ipsam quod corporis accusantium voluptatum, voluptatibus, laudantium ea iusto. Iure enim nemo maxime ipsum velit commodi praesentium esse, facere qui quam numquam minus dolorem odit.
        Voluptatibus commodi recusandae deleniti eligendi dolore ratione iure accusamus quae unde deserunt iusto similique nihil voluptate impedit libero, cupiditate velit, officia quas esse! Consequatur, quisquam dignissimos! Sint quasi vitae quis?
        Illo alias repellendus reiciendis eveniet itaque at accusantium ex fugiat error quisquam. Tenetur, aliquid laborum suscipit nihil itaque odio earum eveniet in, soluta accusantium fuga molestiae magni sed esse porro!
        Laborum ad hic optio rerum assumenda ea eveniet aut esse, velit rem quod ipsam cupiditate a aliquam sequi quam autem, nostrum fugiat? Animi, odit dolor! Aperiam architecto quo rem ipsa.
        Repellendus, veritatis! Suscipit sunt facilis dignissimos itaque sit fugit delectus ea labore omnis, cumque impedit eaque quod officiis illo ut eveniet saepe facere similique hic aliquid. Voluptates sit corrupti eveniet?
        Expedita consectetur omnis similique nisi rerum dolore illum nam qui harum repellendus, optio laboriosam voluptatibus neque natus accusantium praesentium aliquam enim velit pariatur labore obcaecati ea. Incidunt, minus praesentium? Voluptatibus.
        Est repellat expedita obcaecati maiores delectus inventore iusto iure reprehenderit, perferendis nemo placeat quaerat. Vero facilis a ab odit! Similique possimus mollitia quis voluptatibus culpa exercitationem aperiam saepe quibusdam excepturi.
        Et officiis sequi necessitatibus minima omnis maiores quidem qui delectus accusantium, recusandae quisquam praesentium alias, exercitationem molestias. Aliquam obcaecati architecto in consectetur eaque. Alias, aliquid iste ducimus incidunt fuga a!
        Aliquid ipsam nulla reprehenderit. Eius nesciunt ad maxime culpa obcaecati excepturi, pariatur doloribus accusamus delectus corporis qui totam assumenda at cum similique tenetur corrupti voluptates aut earum, fugit suscipit quidem.
        Deleniti nobis similique totam illum veniam, explicabo vero cum voluptas! Quibusdam ducimus sunt, quam nisi, iure repellat fuga sapiente eum voluptates cupiditate facilis hic eligendi voluptatum voluptate dolorem aspernatur ullam!
        Quos explicabo numquam laudantium molestias rerum fuga, aliquid mollitia, soluta a temporibus, cumque nulla doloremque eum iste asperiores quidem reprehenderit nam voluptate? Laboriosam officiis id veniam molestiae quam illo corporis!
        Doloribus perspiciatis sint in et possimus iusto, quia vero corporis ab dolorem, suscipit libero cum. At nihil adipisci aperiam magni odit quod maiores earum corporis. Ut minus fuga voluptas libero?
        Hic modi nulla eaque autem adipisci architecto voluptate sunt, laboriosam est eius pariatur atque incidunt ad repellendus voluptates expedita nihil porro temporibus voluptatibus. Quibusdam eos laboriosam ipsum, sed maxime aspernatur.
        Dignissimos consectetur atque ducimus doloribus cupiditate vero, totam veritatis provident! Fugiat nemo id iure, soluta libero magni? Explicabo porro et maiores quaerat corrupti repellat voluptatem. Magnam nulla itaque aspernatur odio.
        Dolorem commodi quia placeat neque voluptatibus inventore dignissimos aliquam omnis eveniet doloribus minima cumque nesciunt ullam facilis officia amet modi quaerat quo, eum, nobis vitae. Placeat quibusdam ut dolore eos.
        Totam ad iure laborum eos, pariatur nam obcaecati quidem cumque, aspernatur quibusdam quisquam optio nobis nulla non eligendi iusto labore? Ab officiis totam natus laborum fuga iure quis esse vitae!
        Alias perferendis recusandae enim, possimus saepe vero error neque sunt pariatur, ut dolor inventore debitis reiciendis eos incidunt nostrum quod. Labore id veniam at minus saepe ipsum aliquam dolore accusantium!
        Fuga quae et quaerat, voluptatibus dolor esse nesciunt qui ab cupiditate autem doloribus quo minima perferendis veniam ullam vel eaque doloremque, ipsa, laudantium quas deleniti. Doloremque rerum in quas atque.
        Numquam veniam magnam necessitatibus assumenda odio neque similique dolor, impedit eligendi expedita mollitia, nulla facilis officia cum inventore? Quisquam vero eos dolor quam accusantium laudantium ducimus vitae incidunt earum fuga.
        Ipsam vel fuga ab, inventore molestias delectus adipisci voluptate ex non temporibus similique possimus dicta at dolore? Corrupti laudantium eos, itaque reprehenderit aperiam culpa, ullam, voluptatibus facere sit ipsum suscipit.
        Doloribus saepe itaque quibusdam tenetur provident maxime aliquam, animi, libero corrupti, ratione veniam earum obcaecati dolore dolorem enim iure. Laudantium dolorum architecto sunt quae obcaecati quas cum dolore doloribus esse.
        Similique voluptas natus illum dignissimos quas, delectus, quisquam earum laudantium rem odit, laborum minima? Quasi nihil soluta magni architecto laboriosam illum sunt temporibus, eos doloribus tenetur. Nam distinctio consequatur quis!
        Officia harum repellendus fugit tempore. Tempore repellat voluptatem iure modi facilis, ad impedit asperiores deserunt enim unde pariatur quisquam obcaecati cumque, magni a? Magni quae consequatur animi, fugit eligendi maiores!
        Iusto, deserunt unde! Ea aut, distinctio quam ex labore tempore consequuntur odit incidunt dolor cupiditate placeat repudiandae tenetur magnam possimus tempora expedita modi iste eos nulla. Reiciendis sit quia cumque!
        Nisi fugiat praesentium impedit consequuntur beatae minus sapiente libero odit ea eligendi consectetur provident ipsum expedita quis aliquid explicabo, non qui optio porro tempora dolorem? Cum, quibusdam! Maxime, autem vero.
        Unde doloribus, excepturi suscipit laudantium labore rerum hic, at vero libero dicta expedita error dolorem sunt? Non, consequuntur expedita quibusdam cum vel, sit quos beatae aliquam numquam ex eos quia!
        Qui minus autem reiciendis aut odio tempora, aspernatur, deserunt itaque eveniet fuga ea illo iste non nulla. Id ab aut, pariatur fugit quam eum deserunt? Nemo vel ullam veritatis nesciunt!
        Consequuntur autem corrupti, odit nesciunt ullam corporis praesentium aliquid neque repudiandae cum iste necessitatibus reiciendis rerum placeat quisquam dicta itaque, delectus sit saepe perspiciatis suscipit. Repellat harum reiciendis quidem modi.
        Modi recusandae quia libero ipsa repellat tempora facilis aut repudiandae! Illum dignissimos ab quia vitae, neque libero, totam molestias recusandae, adipisci at nisi tenetur voluptate? In sapiente est voluptas eveniet.
        Debitis modi eaque, ex, corporis obcaecati unde aliquam dignissimos adipisci pariatur quas reiciendis et maiores ab id magni excepturi porro eius. Tempore corporis rem, deserunt impedit eveniet atque laborum earum.
        Dolore iure doloremque consequuntur numquam veritatis consequatur amet facere vel quia, non rem, fuga fugit nam cupiditate corporis error totam officiis accusamus deleniti! Reprehenderit, corrupti architecto? Vero iure dolores error!
        Mollitia autem, officia sed sint iure consectetur recusandae veniam corrupti laboriosam error vitae fugiat, doloribus voluptatum animi id neque temporibus fuga atque, totam iste enim ipsum esse culpa. Cumque, vitae!
        Quam consequatur dolores numquam quis quos obcaecati, dicta amet voluptatem, qui quibusdam omnis aliquam excepturi aut nam, deserunt unde dolor harum pariatur vitae blanditiis necessitatibus eaque magnam. Voluptatum, similique assumenda?
        Placeat molestiae harum veritatis esse nihil distinctio alias dolores. Officia dicta assumenda tempora numquam illo reprehenderit ipsam repellendus deleniti asperiores molestias qui, facilis molestiae voluptatum, harum autem voluptatem explicabo esse?
        Necessitatibus voluptates, molestias ipsa voluptatibus sequi tempora! Illum corporis commodi numquam voluptates amet laborum natus dignissimos perspiciatis, sit minus quaerat corrupti explicabo, repellat maxime quod. Dolore eos ea distinctio esse.
        Ex dolorem atque provident odio! Beatae illum suscipit ipsa nulla dolorem dolor quae eos earum odio sed expedita tenetur magnam quo, et repellat, aspernatur quisquam, dicta vitae est aliquid optio?
        Repellat, nostrum voluptates possimus minima perferendis soluta totam ad aliquid odit cupiditate! Nihil cumque perspiciatis amet autem, doloribus, quaerat, iusto tempora exercitationem non ipsum fugiat unde fuga in possimus repellat!
        Dolores eveniet alias, sunt sint unde quia architecto cum, mollitia reiciendis laudantium officiis vel. Dolore, labore minima porro, neque velit dolores vero possimus maxime est aut earum, delectus officia facilis.
        Rerum distinctio temporibus eaque nostrum assumenda, dignissimos aperiam a alias, tempore iusto minima unde quis aliquid atque, voluptatem fugiat ab ipsam fugit vero quas sequi? Aut assumenda facilis eaque saepe.
        Unde beatae amet quibusdam voluptates in! Tempore aliquam ea nostrum in cum officiis officia, aut ex eum perspiciatis possimus quod tempora excepturi laudantium fugiat rerum inventore pariatur dolor, praesentium hic.
        Assumenda vero magni, eos et odio laudantium quidem? Eaque dolor aperiam fugiat repellendus, dolores, non sapiente est ad placeat culpa quis quos repellat molestiae veniam quidem corrupti deleniti sequi vero?
        Quae qui commodi labore id aut doloremque quo, cum ad non. Ut debitis placeat omnis quisquam, iste eaque, odit voluptates nulla exercitationem voluptatem quo deserunt saepe quibusdam aliquid aspernatur impedit.
        Tempore nostrum dolorem iure quod repudiandae at est ullam, ipsum, cumque labore beatae. Aliquam nam unde neque. Debitis minima atque ratione voluptate officiis dolor facere at perspiciatis, quia officia vel.
        Dolorem, non necessitatibus? Distinctio reiciendis nostrum saepe magnam aliquid aspernatur minima atque repellendus excepturi illo consequuntur, eaque explicabo dolor obcaecati nobis, quod blanditiis id! Beatae doloremque culpa iste quos vel!
      </p> */}
    </>
  )
}


const page = () => {
  // const [placement, setPlacement] = useState("start");
  return (
    <div style={{ marginTop: '80px' }} >
      <div className='flex flex-row gap-10 py-5'>
        <DaysSection />
        <Weather />
      </div>
      <Section />
    </div>
  );
}

export default page
