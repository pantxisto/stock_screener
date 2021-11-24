import * as mongoose from 'mongoose';

export const SecSchema = new mongoose.Schema({
  {
    cik: mongoose.Schema.Types.Mixed,
    entityName: String,
    facts: {
      dei: {
        EntityCommonStockSharesOutstanding: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EntityPublicFloat: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        }
      },
      "us-gaap": {
        AccountsPayableTradeCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccountsReceivableNetCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccruedIncomeTaxesCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedOtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedOtherComprehensiveIncomeLossCumulativeChangesInNetGainLossFromCashFlowHedgesEffectNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedOtherComprehensiveIncomeLossDefinedBenefitPensionAndOtherPostretirementPlansNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedOtherComprehensiveIncomeLossForeignCurrencyTranslationAdjustmentNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AccumulatedOtherComprehensiveIncomeLossNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AllocatedShareBasedCompensationExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AllowanceForDoubtfulAccountsReceivable: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AllowanceForDoubtfulAccountsReceivableCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AllowanceForDoubtfulAccountsReceivableWriteOffs: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AmortizationOfFinancingCostsAndDiscounts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AmortizationOfIntangibleAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AociLossCashFlowHedgeCumulativeGainLossAfterTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        Assets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AssetsCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AssetsNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AssetsOfDisposalGroupIncludingDiscontinuedOperation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AssetsOfDisposalGroupIncludingDiscontinuedOperationCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesAccumulatedGrossUnrealizedGainBeforeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesAccumulatedGrossUnrealizedGainLossBeforeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesContinuousUnrealizedLossPositionAccumulatedLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesContinuousUnrealizedLossPositionFairValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesGrossRealizedGains: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesGrossUnrealizedGains: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesGrossUnrealizedLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableForSaleSecuritiesGrossUnrealizedLosses1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        AvailableforsaleSecuritiesGrossUnrealizedGain: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BuildingsAndImprovementsGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessAcquisitionContingentConsiderationAtFairValueCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessAcquisitionContingentConsiderationAtFairValueNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessCombinationContingentConsiderationArrangementsChangeInAmountOfContingentConsiderationAsset1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessCombinationContingentConsiderationLiability: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessCombinationContingentConsiderationLiabilityNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        BusinessCombinationRecognizedIdentifiableAssetsAcquiredAndLiabilitiesAssumedIntangibleAssetsOtherThanGoodwill: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CashAndCashEquivalentsAtCarryingValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CashAndCashEquivalentsPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CashCashEquivalentsAndShortTermInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CommonStockDividendsPerShareDeclared: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CommonStockSharesAuthorized: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CommonStockSharesIssued: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CommonStockValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CommonStockValueOutstanding: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ComprehensiveIncomeNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ConstructionInProgressGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ContractWithCustomerLiability: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ContractWithCustomerLiabilityRevenueRecognized: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CostOfGoodsAndServicesSold: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CostOfGoodsSold: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CostsAndExpenses: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CumulativeEffectAdjustmentGrossLosses: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CurrentForeignTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        CurrentIncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DebtInstrumentFaceAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DebtInstrumentRepurchaseAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DecreaseInUnrecognizedTaxBenefitsIsReasonablyPossible: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredForeignIncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredIncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredIncomeTaxesAndOtherAssetsNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredIncomeTaxLiabilities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsInventory: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsLiabilitiesNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsNetCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsStateTaxes: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsTaxDeferredExpenseCompensationAndBenefits: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsTaxDeferredExpenseOther: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsTaxDeferredExpenseReservesAndAccrualsAllowanceForDoubtfulAccounts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxAssetsValuationAllowance: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxLiabilities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxLiabilitiesNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxLiabilitiesOther: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxLiabilitiesPropertyPlantAndEquipment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DeferredTaxLiabilitiesUndistributedForeignEarnings: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanAccumulatedBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnAccumulatedPostretirementBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnAccumulatedPostretirementBenefitObligation1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnServiceAndInterestCostComponents: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnServiceAndInterestCostComponents1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointIncreaseOnAccumulatedPostretirementBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanEffectOfOnePercentagePointIncreaseOnServiceAndInterestCostComponents: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanFairValueOfPlanAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateAccumulatedBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateFairValueOfPlanAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateProjectedBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanPensionPlanWithProjectedBenefitObligationInExcessOfPlanAssetsPlanAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedBenefitPlanPensionPlanWithProjectedBenefitObligationInExcessOfPlanAssetsProjectedBenefitObligation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DefinedContributionPlanCostRecognized: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        Depreciation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DerivativeFairValueOfDerivativeAsset: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DerivativeFairValueOfDerivativeLiability: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DerivativeInstrumentsGainLossReclassifiedFromAccumulatedOCIIntoIncomeEffectivePortionNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DerivativeInstrumentsGainRecognizedInIncome: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationGainLossFromDisposalOfDiscontinuedOperationBeforeIncomeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationIncomeLossFromDiscontinuedOperationBeforeIncomeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationIncomeLossFromDiscontinuedOperationDuringPhaseOutPeriodNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationTaxEffectOfDiscontinuedOperation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DiscontinuedOperationTaxEffectOfIncomeLossFromDisposalOfDiscontinuedOperation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationAccountsNotesAndLoansReceivableNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationAccountsPayable: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationAssetsNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationGoodwill1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationIntangibleAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationIntangibleAssetsNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationInventoryCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationOtherNoncurrentAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationPrepaidAndOtherAssetsCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationPropertyPlantAndEquipment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DisposalGroupIncludingDiscontinuedOperationRevenue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DividendsPayableCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        DividendsPayableCurrentAndNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EarlyRepaymentOfSubordinatedDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EarningsPerShareBasic: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EarningsPerShareDiluted: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateContinuingOperations: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationDeductionsDividends: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationForeignIncomeTaxRateDifferential: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationNondeductibleExpenseShareBasedCompensationCost: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationOtherAdjustments: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationPriorYearIncomeTaxes: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationStateAndLocalIncomeTaxes: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectiveIncomeTaxRateReconciliationTaxCreditsResearch: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectOfExchangeRateOnCashAndCashEquivalents: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeRelatedLiabilitiesCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognized: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognizedPeriodForRecognition: {
          label: String,
          description: String,
          units: {
            Y: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeServiceShareBasedCompensationUnrecognizedCompensationCostsOnNonvestedAwards: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EmployeeServiceShareBasedCompensationUnrecognizedCompensationCostsOnNonvestedAwardsWeightedAveragePeriodOfRecognition: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquityMethodInvestmentAggregateCost: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquityMethodInvestmentOtherThanTemporaryImpairment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquityMethodInvestmentRealizedGainLossOnDisposal: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquityMethodInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquitySecuritiesWithoutReadilyDeterminableFairValueAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        EquitySecuritiesWithoutReadilyDeterminableFairValueUpwardPriceAdjustmentCumulativeAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ExtinguishmentOfDebtAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FairValueEstimateNotPracticableEquityMethodInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FairValueInvestmentsEntitiesThatCalculateNetAssetValuePerShareUnfundedCommittments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAccumulatedAmortization: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseNextTwelveMonths: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseRemainderOfFiscalYear: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseYearFour: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseYearThree: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAmortizationExpenseYearTwo: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsAverageUsefulLife: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            Y: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsForeignCurrencyTranslationGainLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsPurchaseAccountingAdjustments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsUsefulLifeMaximum: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            Y: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FiniteLivedIntangibleAssetsUsefulLifeMinimum: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            Y: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FinitelivedIntangibleAssetsAcquired1: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ForeignCurrencyTransactionGainLossBeforeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ForeignCurrencyTransactionLossBeforeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FutureAmortizationExpenseYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FutureAmortizationExpenseYearFour: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FutureAmortizationExpenseYearOne: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FutureAmortizationExpenseYearThree: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        FutureAmortizationExpenseYearTwo: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GainLossOnContractTermination: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GainLossOnSaleOfBusiness: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GainLossOnSaleOfEquityInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GainLossRelatedToLitigationSettlement: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GainsLossesOnExtinguishmentOfDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        Goodwill: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillAcquiredDuringPeriod: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillForeignCurrencyTranslationGainLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillImpairmentLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillPurchaseAccountingAdjustments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillTranslationAdjustments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillTranslationAndPurchaseAccountingAdjustments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GoodwillWrittenOffRelatedToSaleOfBusinessUnit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        GrossProfit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ImpairmentOfIntangibleAssetsExcludingGoodwill: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ImpairmentOfInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsBeforeIncomeTaxesDomestic: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsBeforeIncomeTaxesForeign: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsIncludingPortionAttributableToNoncontrollingInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsPerBasicShare: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromContinuingOperationsPerDilutedShare: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromDiscontinuedOperationsNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromDiscontinuedOperationsNetOfTaxPerBasicShare: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromDiscontinuedOperationsNetOfTaxPerDilutedShare: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromEquityMethodInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeLossFromEquityMethodInvestmentsNetOfDividendsOrDistributions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeTaxesPaid: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeTaxesPaidNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeTaxReconciliationDispositionOfBusiness: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncomeTaxReconciliationPriorYearIncomeTaxes: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInAccountsPayableAndAccruedLiabilities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInAccountsReceivable: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInAccruedIncomeTaxesPayable: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInInventories: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInOtherAccruedLiabilities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInOtherOperatingCapitalNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInOtherOperatingLiabilities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInRestrictedCash: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncreaseDecreaseInRestrictedCashForOperatingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IncrementalCommonSharesAttributableToShareBasedPaymentArrangements: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IndefiniteLivedIntangibleAssetsExcludingGoodwill: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IndefiniteLivedIntangibleAssetsForeignCurrencyTranslationGainLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IndefiniteLivedIntangibleAssetsTranslationAdjustments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        IntangibleAssetsNetExcludingGoodwill: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InterestExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InterestPaid: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InterestPaidNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoriesPropertyHeldForSaleCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryFinishedGoods: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryFinishedGoodsNetOfReserves: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryRawMaterials: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryRawMaterialsNetOfReserves: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryWorkInProcess: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InventoryWorkInProcessNetOfReserves: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InvestmentIncomeInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        InvestmentsFairValueDisclosure: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        Land: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueYearFour: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueYearThree: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsDueYearTwo: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityPaymentsRemainderOfFiscalYear: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LesseeOperatingLeaseLiabilityUndiscountedExcessAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LiabilitiesAndStockholdersEquity: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LiabilitiesCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LiabilitiesOfDisposalGroupIncludingDiscontinuedOperation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LiabilitiesOfDisposalGroupIncludingDiscontinuedOperationCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LiabilitiesOfDisposalGroupIncludingDiscontinuedOperationNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LineOfCreditFacilityRemainingBorrowingCapacity: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LitigationReserve: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalAfterYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalInNextTwelveMonths: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFive: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFour: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalInYearThree: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtMaturitiesRepaymentsOfPrincipalInYearTwo: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermDebtNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LongTermInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LossContingencyAccrualAtCarryingValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LossContingencyEstimateOfPossibleLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LossContingencyRangeOfPossibleLossMaximum: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        LossContingencyRangeOfPossibleLossMinimum: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        MachineryAndEquipmentGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        MarketableSecuritiesRealizedGainLossOtherThanTemporaryImpairmentsAmount: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        MinorityInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInDiscontinuedOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInFinancingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInFinancingActivitiesContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInInvestingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInInvestingActivitiesContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInOperatingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetCashProvidedByUsedInOperatingActivitiesContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetIncomeLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NetIncomeLossAvailableToCommonStockholdersBasic: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnIncomeFromContinuingOperations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnNetIncome: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnNetRevenue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NoncurrentAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NotionalAmountOfCashFlowHedgeInstruments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NotionalAmountOfFairValueHedgeInstruments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NotionalAmountOfNetInvestmentHedgeInstruments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NotionalAmountOfOtherDerivativesNotDesignatedAsHedgingInstruments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        NumberOfReportableSegments: {
          label: String,
          description: String,
          units: {
            segment: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingIncomeLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseCost: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseLiability: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseLiabilityCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseLiabilityNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeasePayments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseRightOfUseAsset: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OperatingLeaseWeightedAverageDiscountRatePercent: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherAccruedLiabilitiesCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherAccruedLiabilitiesCurrentAndNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherAssetsCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherAssetsNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeAvailableForSaleSecuritiesAdjustmentNetOfTaxPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeAvailableforsaleSecuritiesAdjustmentNetOfTaxPortionAttributableToParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDefinedBenefitPlansAdjustmentNetOfTaxPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDefinedBenefitPlansAdjustmentNetOfTaxPortionAttributableToParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDefinedBenefitPlansTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDerivativesQualifyingAsHedgesNetOfTaxPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDerivativesQualifyingAsHedgesNetOfTaxPortionAttributableToParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeDerivativesQualifyingAsHedgesTaxEffectPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeForeignCurrencyTransactionAndTranslationAdjustmentNetOfTaxPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeForeignCurrencyTransactionAndTranslationAdjustmentNetOfTaxPortionAttributableToParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossBeforeReclassificationsNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationAndTaxParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossDerivativesQualifyingAsHedgesNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossDerivativesQualifyingAsHedgesTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossNetOfTaxPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossPensionAndOtherPostretirementBenefitPlansAdjustmentNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossPensionAndOtherPostretirementBenefitPlansTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossReclassificationAdjustmentOnDerivativesIncludedInNetIncomeNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeLossReclassificationAdjustmentOnDerivativesIncludedInNetIncomeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherLiabilitiesNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherNonoperatingIncomeExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherSundryLiabilitiesNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        OtherThanTemporaryImpairmentLossesInvestmentsPortionRecognizedInEarningsNetAvailableforsaleSecurities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentOfFinancingAndStockIssuanceCosts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        PaymentsForOtherTaxes: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsForProceedsFromInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsForProceedsFromOtherInvestingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsForRepurchaseOfCommonStock: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsForRepurchaseOfPreferredStockAndPreferenceStock: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsOfDebtExtinguishmentCosts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String,
                start: String
              }
            ]
          }
        },
        PaymentsOfDebtIssuanceCosts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        PaymentsOfDividends: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsOfDividendsCommonStock: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsOfFinancingCosts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsToAcquireBusinessesNetOfCashAcquired: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsToAcquireInProcessResearchAndDevelopment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsToAcquireMarketableSecurities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsToAcquireProductiveAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PaymentsToAcquirePropertyPlantAndEquipment: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PensionAndOtherPostretirementDefinedBenefitPlansLiabilitiesNoncurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PreferredStockParOrStatedValuePerShare: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            USD/shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PreferredStockSharesAuthorized: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PreferredStockSharesIssued: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PreferredStockValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromDivestitureOfBusinesses: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromDivestitureOfBusinessesAndInterestsInAffiliates: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromIssuanceOfLongTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromPaymentsForOtherFinancingActivities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromRepaymentsOfShortTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSaleAndMaturityOfMarketableSecurities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSaleAndMaturityOfOtherInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSaleOfAvailableForSaleSecuritiesEquity: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSaleOfEquityMethodInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSaleOfLongtermInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromSalesOfBusinessAffiliateAndProductiveAssets: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProceedsFromShortTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        ProceedsFromStockOptionsExercised: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProfitLoss: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PropertyPlantAndEquipmentAdditions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PropertyPlantAndEquipmentGross: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        PropertyPlantAndEquipmentNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ProvisionForDoubtfulAccounts: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ReclassificationFromAccumulatedOtherComprehensiveIncomeCurrentPeriodBeforeTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ReclassificationFromAccumulatedOtherComprehensiveIncomeCurrentPeriodNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RepaymentsOfDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RepaymentsOfLongTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RepaymentsOfOtherDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RepaymentsOfShortTermDebt: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ResearchAndDevelopmentAssetAcquiredOtherThanThroughBusinessCombinationWrittenOff: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ResearchAndDevelopmentExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ResearchAndDevelopmentExpenseExcludingAcquiredInProcessCost: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ResearchAndDevelopmentInProcess: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RestrictedCashAndCashEquivalentsAtCarryingValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RestrictedCashAndInvestmentsCurrent: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RestructuringCharges: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RestructuringReserve: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RestructuringReservePeriodExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RetainedEarningsAccumulatedDeficit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RevenueFromContractWithCustomerExcludingAssessedTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        RightOfUseAssetObtainedInExchangeForOperatingLeaseLiability: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SalesRevenueNet: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SegmentReportingReconcilingItemsRevenue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SellingGeneralAndAdministrativeExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensation: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardNumberOfSharesAvailableForGrant: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableIntrinsicValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableNumber: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageExercisePrice: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageRemainingContractualTerm: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ],
            Y: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingIntrinsicValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingNumber: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageExercisePrice: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageRemainingContractualTerm: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String
              }
            ]
          }
        },
        ShortTermBorrowings: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShortTermDebtWeightedAverageInterestRate: {
          label: String,
          description: String,
          units: {
            pure: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ShortTermInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleAmountOfUnrecordedBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleEstimatedRangeOfChangeLowerBound: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleEstimatedRangeOfChangeUpperBound: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        StockholdersEquity: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TaxAdjustmentsSettlementsAndUnusualProvisions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TaxCutsAndJobsActOf2017ChangeInTaxRateIncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TaxCutsAndJobsActOf2017IncomeTaxExpenseBenefit: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TranslationAdjustmentForNetInvestmentHedgeIncreaseDecreaseNetOfTax: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TreasuryStockCommonShares: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TreasuryStockCommonValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TreasuryStockShares: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        TreasuryStockValue: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnamortizedDebtIssuanceExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UndistributedEarningsOfForeignSubsidiaries: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrealizedGainLossOnInvestments: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefits: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsDecreasesResultingFromAcquisition: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsDecreasesResultingFromCurrentPeriodTaxPositions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsDecreasesResultingFromPriorPeriodTaxPositions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsDecreasesResultingFromSettlementsWithTaxingAuthorities: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsIncreasesResultingFromAcquisition: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsIncreasesResultingFromCurrentPeriodTaxPositions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsIncreasesResultingFromPriorPeriodTaxPositions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsPeriodIncreaseDecrease: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsReductionsResultingFromLapseOfApplicableStatuteOfLimitations: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        UnrecognizedTaxBenefitsThatWouldImpactEffectiveTaxRate: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ValuationAllowancesAndReservesBalance: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ValuationAllowancesAndReservesChargedToCostAndExpense: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ValuationAllowancesAndReservesDeductions: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        ValuationAllowancesAndReservesReservesOfBusinessesAcquired: {
          label: String,
          description: String,
          units: {
            USD: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        WeightedAverageNumberOfDilutedSharesOutstanding: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        },
        WeightedAverageNumberOfSharesOutstandingBasic: {
          label: String,
          description: String,
          units: {
            shares: [
              {
                start: String,
                end: String,
                val: mongoose.Schema.Types.Mixed,
                accn: String,
                fy: mongoose.Schema.Types.Mixed,
                fp: String,
                form: String,
                filed: String,
                frame: String
              }
            ]
          }
        }
      }
    }
  }
});
