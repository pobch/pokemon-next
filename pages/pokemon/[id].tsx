import axios from 'axios'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type ResData = Record<string, unknown> & {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    back_default: string
    front_default: string
    front_shiny: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

function Detail({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>{data.name}</h1>
      <Link href={'/pokemon'}>Go to List</Link>
      <div>
        <Image
          src={data.sprites.other['official-artwork'].front_default}
          alt="front"
          width={350}
          height={350}
        />
      </div>
      <div>W: {data.weight}</div>
      <div>H: {data.height}</div>
      <p style={{ fontSize: '1.5rem', paddingInline: '3rem' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque laudantium ad et
        maiores porro, sunt architecto id officia cumque. Sint, quo explicabo veritatis eos velit
        placeat cumque nihil quis quas rerum repellat consequatur error distinctio obcaecati itaque,
        laboriosam facilis excepturi asperiores? Exercitationem fuga quidem, recusandae esse impedit
        atque fugiat illo non, magni voluptas ratione eius asperiores sit numquam inventore animi
        excepturi delectus sint error facilis aut eveniet! Laborum voluptatum esse dolor laudantium
        in, officiis cum iste aperiam recusandae itaque nemo accusantium officia earum modi veniam
        amet quis praesentium sapiente ut reiciendis porro, inventore eaque. Sequi ab voluptates
        accusantium? Nam, voluptates exercitationem itaque doloremque quia ut tenetur sunt iure?
        Doloribus dignissimos, magni, enim, voluptatem velit ipsa quaerat iste aliquid quo ullam
        placeat! Eligendi consequuntur vitae nobis quod aspernatur quam nostrum labore dolorum
        impedit, ullam a illum expedita repudiandae quia eius iste, ea praesentium. Voluptate, neque
        aperiam optio libero eum reprehenderit error facilis voluptatibus rerum, atque iure
        voluptatum cupiditate, labore voluptas dignissimos possimus. In laudantium est, maiores
        obcaecati dolorum illo quidem vitae nostrum, accusamus distinctio tenetur quasi consequatur
        alias, natus soluta! Earum odit molestiae, quibusdam optio praesentium dolorem maxime
        numquam adipisci veritatis, doloremque exercitationem laboriosam placeat? Similique magni
        repellat reiciendis magnam recusandae accusantium modi aperiam deleniti esse libero in
        labore mollitia dignissimos dolore sapiente beatae omnis dolores laboriosam ipsa,
        perferendis expedita illum cumque? Perferendis, error doloremque quidem odio non fugit cum.
        Officiis eligendi nostrum ipsum quibusdam ad voluptates soluta nulla. Eos atque, obcaecati
        asperiores consequatur illum harum deleniti facere perferendis. Hic eum, consequuntur
        tenetur, iure ut nam quo dolores, aperiam atque id ab incidunt aliquid expedita nisi iste
        distinctio porro nostrum autem voluptas ipsa fuga minus! Dignissimos est, similique mollitia
        ratione accusantium itaque a iusto ut quasi id veniam et aperiam facilis delectus quisquam
        asperiores, maiores quibusdam quae fugit repellendus minima rerum. Esse, similique maxime?
        Magnam, eaque aperiam? Eveniet reprehenderit deleniti magni amet iusto eum optio natus esse
        atque culpa fugit, ut dolores nisi accusantium animi quas ex error. Quisquam consequuntur
        provident ad unde culpa corrupti eius. Ipsam amet doloribus assumenda? Unde accusamus, ab
        molestiae deleniti iure deserunt labore, temporibus hic illum maiores eum officiis sunt
        ratione corporis dolores sit voluptas veniam corrupti eligendi ex nemo? Consequuntur odit a
        nisi laborum excepturi nulla, quas nostrum saepe eligendi voluptate delectus eius ut unde ad
        labore minima. Quo iste excepturi laboriosam fugit suscipit? Sed dolore corporis dignissimos
        eius molestias, neque, repudiandae optio, atque quod asperiores sequi nisi ab suscipit
        similique aspernatur quis facilis provident! Temporibus molestias quam laboriosam
        consequatur praesentium recusandae harum? Qui iusto, nulla minus nisi natus ipsum molestias
        rerum ipsam explicabo totam dolorem. Reprehenderit sunt dolor explicabo asperiores voluptate
        eveniet minima vel officiis eius repellat mollitia obcaecati cum minus consectetur
        recusandae error necessitatibus possimus harum assumenda quis rerum nesciunt deleniti,
        numquam nostrum? Soluta earum fugit, perspiciatis omnis, modi inventore quibusdam
        praesentium est provident nihil vero iste dolorem aperiam odio libero illo laboriosam illum
        ipsa a. Assumenda necessitatibus accusamus suscipit est tempora alias, eveniet veniam
        veritatis corporis fugit vero dicta vel exercitationem cumque magni nam quas qui architecto
        incidunt fugiat blanditiis perferendis? Quaerat adipisci quibusdam placeat atque? Facere
        excepturi ut deleniti. Eveniet recusandae nostrum eius, error incidunt ullam saepe assumenda
        voluptas, nihil nisi soluta veritatis vero totam inventore illo, voluptates alias ipsam
        veniam quibusdam! Voluptates, in iure possimus nobis quidem odio nemo recusandae veritatis
        inventore nihil cum vitae quod, alias culpa impedit, cupiditate perferendis minima!
        Praesentium quos veritatis eaque ipsa fugit non? Similique adipisci labore quas a itaque
        eaque! Veritatis, eaque laudantium commodi nostrum iure reiciendis iusto voluptas corrupti
        sequi ratione suscipit, veniam officiis facilis ea quod sunt deserunt dicta ad. Placeat vel,
        quam voluptatum alias aliquam molestias incidunt quasi assumenda deleniti ab non libero unde
        molestiae hic nulla nam voluptate, maiores vero veritatis necessitatibus vitae et ullam
        magnam? Eum obcaecati excepturi consequuntur distinctio neque, libero unde esse atque ipsum
        labore facilis dolorem officiis mollitia, doloremque temporibus recusandae, deleniti
        dignissimos fugit quaerat et! Sapiente perferendis numquam laborum mollitia suscipit,
        eligendi est quod amet quia beatae minus ad vitae asperiores eaque veniam tempora aliquam
        officia doloribus voluptates. Inventore illum quod cum ipsum. Cum rem facilis corrupti illo
        quidem molestiae, beatae quaerat voluptates! Recusandae iure sit hic distinctio voluptatum
        nulla minus inventore. Commodi, temporibus? Explicabo consectetur ullam sequi delectus
        impedit officia facere excepturi omnis, maiores autem temporibus ratione alias quisquam quia
        est eos pariatur dignissimos magni necessitatibus quaerat quas minima aliquam! Iste minima
        facilis soluta, itaque qui consequuntur vel tempore! Eligendi consequuntur sed aliquam eius.
        Temporibus incidunt delectus, sint quia commodi repellat, vero alias quo corporis deleniti
        similique? Ad qui culpa libero explicabo labore aperiam. Repellat enim consequuntur
        inventore numquam vel minus optio, nostrum doloribus minima, esse ipsum illum. Quia cum
        minus sunt odit magnam adipisci, praesentium repudiandae explicabo quibusdam facere non
        animi cupiditate, ab molestias architecto atque assumenda incidunt. Similique exercitationem
        consequatur ipsam animi at, a voluptatibus pariatur, beatae, impedit deleniti voluptatem
        nobis. Esse consequatur, voluptates minus a illo minima voluptatem vel unde ullam tempore
        possimus eaque voluptas eos dignissimos quidem iste sit. Vel magni tempora ipsam aspernatur
        autem fugiat dolorum, reprehenderit inventore provident velit exercitationem beatae rerum
        tenetur soluta laborum quaerat a! Nulla, praesentium ipsum error non dolor perferendis
        molestiae beatae illum id incidunt alias assumenda rerum iste quibusdam deleniti voluptatum
        quis sequi quaerat. Fuga, consequatur? Ab, laborum nobis, sunt et explicabo cupiditate
        itaque necessitatibus vel quia ipsum ducimus dolores eum. Enim perspiciatis voluptas quas
        ducimus cum. Illo exercitationem consequuntur fuga nemo in adipisci reprehenderit sint,
        eligendi magnam! Illum, ullam qui. Veritatis, eligendi expedita aliquam facere quo aperiam
        provident alias? Debitis quo ad recusandae voluptates soluta cum asperiores dolores id vel
        quaerat distinctio, culpa, eos, necessitatibus nam sapiente. Dolorum eligendi similique
        velit veniam? Nobis architecto amet doloremque sequi! Deleniti dicta nesciunt facilis est
        tempore, a reprehenderit tenetur, distinctio molestias laborum ipsa atque? Optio ea velit
        voluptas ab est debitis quaerat dolorem sint exercitationem deleniti cumque doloribus
        obcaecati rem odio, delectus perferendis. Unde dolorum fugiat officia repellendus quam
        veniam cupiditate, voluptas odit sapiente in aspernatur veritatis labore! Quam soluta
        asperiores a itaque non?
      </p>
      <Link href={'/pokemon'}>Go to List</Link>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await axios.get<ResData>(URL)
  const data = res.data
  return {
    props: { data },
  }
}

export default Detail
