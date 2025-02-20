import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

export default function HomeSocialProof() {
  return (
    <LandingSocialProofBand invert={false} className="block">
      <LandingSocialProofBandItem>
        &ldquo;I eliminated 4 hours of mind-numbing research work and doubled my calling time!&rdquo; – Jessica M., Miami
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        &ldquo;10 deals closed in 3 months with enriched data&rdquo; – Jason W., Broker
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem graphic="rating">
        95% lead qualification accuracy
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        &ldquo;My pipeline is consistently full now&rdquo; – Sam K., Agent
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        &ldquo;Cold calls feel effortless with instant data&rdquo; – Alex R., Realtor
      </LandingSocialProofBandItem>
    </LandingSocialProofBand>
  );
}
