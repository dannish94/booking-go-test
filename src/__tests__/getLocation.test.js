
import { rawLocationData } from '../data/locationData'
import getLocations from '../services/getLocations'

describe('testing getLocation() for API response', () =>{
    it('return data from calling endpoint', () =>
    {
        return getLocations(6, 'manchester')
        .then(data => {
            expect(data).toBeDefined()
        })
    })

    it('does data from endpoint match mock data', () =>
    {
        return getLocations(6, 'manchester')
        .then(data => {
            expect(data[0]).toEqual(rawLocationData())
        })
    })

    it('return blank [] if no search term is passed to endpoint', () => 
    {
        return getLocations(6, '')
        .then(data => {
            expect(data).toEqual([]);
        })
    })

    it('return no results message if search term is not found', () =>
    {
        return getLocations(6, 'XXAXNAJNXJNXAJXNAJXNJAXNAJ')
        .then(data => {
            expect(data[0].name).toEqual('No results found')
        })
    })
})