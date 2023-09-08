import Image from "next/image";
import { prisma } from "../../lib/prisma";

export default async function TransTable() {
  let transactions = await prisma.transactions.findMany({});
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Reference</th>
            <th>💸Withdrawals</th>
            <th>💰Deposit</th>
            <th>💲Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <Image
                        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Max"
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <Image
                        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Callie"
                        alt="avatar"
                        width={100}
                        height={100}
                      />{" "}
                    </div>
                  </div>
                  <div className="font-bold">Brice Swyre</div>
                </div>
              </div>
            </td>
            <td>Red</td>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <Image
                        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Jasmine"
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="font-bold">Marjy Ferencz</div>
                </div>
              </div>
            </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <Image
                        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Simba"
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="font-bold">Yancy Tear</div>
                </div>
              </div>
            </td>
            <td>Indigo</td>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">$details</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Reference</th>
            <th>💸Withdrawls</th>
            <th>💰Deposit</th>
            <th>💲Balance</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
