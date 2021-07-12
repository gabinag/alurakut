
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

function ProfileSideBar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
    </Box>
  )
}


export default function Home() {

  const usuario = 'gabinag';

  return (
  <MainGrid>
    <div className= "profileArea" style= {{ gridArea: 'profileArea'}}>
      <ProfileSideBar githubUser={usuario} />
    </div>

    <div className="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>
      <Box>
        Bem vindo
    </Box>
    </div>


    <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
      <Box>
        Pessoas da comunidade
        
      </Box>
      <Box>
        Comunidades
      </Box>
    </div>
  </MainGrid>
  )
}
