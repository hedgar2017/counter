import { expect } from 'chai';
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../deploy/utils';

describe('Counter', function () {
  it("Increase and decrease value", async function () {
    const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);

    const counter = await deployContract("Counter", [], { wallet, silent: true });

    expect(await counter.value()).to.eq(0n);

    const increaseTx = await counter.increase();
    
    // wait until the transaction is processed
    await increaseTx.wait();

    expect(await counter.value()).to.eq(1n);

    const decreaseTx = await counter.decrease();
    
    // wait until the transaction is processed
    await decreaseTx.wait();

    expect(await counter.value()).to.eq(0n);
  });
});
