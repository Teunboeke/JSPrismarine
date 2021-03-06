import Identifiers from '../Identifiers';
import DataPacket from './DataPacket';

export default class UpdateAttributesPacket extends DataPacket {
    static NetID = Identifiers.UpdateAttributesPacket;

    runtimeEntityId!: bigint;
    attributes = [];

    encodePayload() {
        this.writeUnsignedVarLong(this.runtimeEntityId);
        this.writeAttributes(this.attributes);
    }
}
