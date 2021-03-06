/* eslint-disable no-bitwise */

/**
 * Flags used in payment transactions.
 *
 * @note These are only flags which are utilized in Xpring SDK.
 * For the full list of payment flags, @see https://xrpl.org/payment.html#payment-flags
 *
 */
class PaymentFlags {
  static TF_PARTIAL_PAYMENT = 1 << 17

  /**
   * Check if the given flag is set in the given set of bit-flags.
   *
   * @param flag: The flag to check the presence of.
   * @param flags: The flags to check
   */
  static checkFlag(flag: number, flags: number): boolean {
    return (flag & flags) === flag
  }
}

export default PaymentFlags
