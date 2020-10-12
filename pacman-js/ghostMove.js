import { DIRECTIONS, OBJECT_TYPE} from './setup'

// Primitive Move Function
export function randomMovement(position, direction, objectExist){
    let dir = direction;
    let nextMovePos = position + dir.movement;

    // Create Array from directions object keys
    const keys = Object.keys(DIRECTIONS);

    while ( objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ) {
        // Get a random key from array
        const key = keys[Math.floor(Math.random() * keys.length)];

        // Set the next move
        dir = DIRECTIONS[key]

        // set new move 
        nextMovePos = position + dir.movement;
    }
    return { nextMovePos, direction: dir}
}