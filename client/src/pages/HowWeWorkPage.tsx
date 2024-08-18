import Contribute from '../components/HowWeWork/Contribute'
import Providers from '../components/HowWeWork/Providers'
import ProvidersCan from '../components/HowWeWork/ProvidersCan'
import TheSystemWill from '../components/HowWeWork/TheSystemWill'
import TheSystemWillArrrangeFor from '../components/HowWeWork/TheSystemWillArrrangeFor'

const HowWeWorkPage = () => {
  return (
    <div>
      <ProvidersCan/>
      <TheSystemWill/>
      <TheSystemWillArrrangeFor/>
      <Providers/>
      <Contribute/>
    </div>
  )
}

export default HowWeWorkPage
